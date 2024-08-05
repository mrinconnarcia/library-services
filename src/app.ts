import express from 'express';
import connectMongoDB from './database/connectMongo';
import connectRabbit from './book/infrastructure/rabbit/rabbitConfig';
import bookRoutes from './book/infrastructure/routes/bookRoutes';
import dotenv from 'dotenv';

dotenv.config(); // Cargamos las variables de entorno

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', bookRoutes);

const start = async () => {
  try {
    await connectMongoDB();
    await connectRabbit();
    app.listen(PORT, () => console.log(`Book Service running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start the application', error);
    process.exit(1);
  }
};

start();