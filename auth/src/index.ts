import mongoose, { ConnectOptions } from 'mongoose';
import { app } from './app';

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined');
}

if (!process.env.MONGO_URI) {
  throw new Error('JWT_KEY must be defined');
}

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Connected to mongodb');
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

start();
