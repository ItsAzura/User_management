import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('using existing database connection');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'user-management',
    });
    isConnected = true;
    console.log('Database connected');
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
  }
};
