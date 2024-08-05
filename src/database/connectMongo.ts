import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/library', {
      serverSelectionTimeoutMS: 30000 // Aumentamos el tiempo de espera a 30 segundos
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Salimos del proceso si no podemos conectar a MongoDB
  }
};

export default connectMongoDB;