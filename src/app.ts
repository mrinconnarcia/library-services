import express from 'express';
import dotenv from 'dotenv';
import connectPostgres from './database/connectPostgres';
import connectRabbit from './loan/infrastructure/rabbit/rabbitConfig';
import loanRoutes from './loan/infrastructure/routes/loanRoutes';
import { initializeServices } from './loan/dependencies';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use('/api', loanRoutes);

const start = async () => {
  await connectPostgres(); // Asegúrate de que la conexión esté establecida
  await connectRabbit();

  // Inicializa los servicios y casos de uso
  await initializeServices();

  app.listen(PORT, () => console.log(`Library Service running on port ${PORT}`));
};

start().catch(error => {
  console.error('Error starting the application', error);
  process.exit(1);
});
