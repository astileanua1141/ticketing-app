import mongoose, { ConnectOptions } from 'mongoose';
import { app } from './app';

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined');
}

const start = async () => {
  try {
    //wrong url here...
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
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
