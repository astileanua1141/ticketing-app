import mongoose, { ConnectOptions } from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined');
}
if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI must be defined');
}

const start = async () => {
  try {
    // first argument: ticketing -> the name of the cluster id, specified in the k8s depl as -cid argument
    // second arg: client id - random chars
    // third arg: nats srv k8s depl, for client with port 4222
    await natsWrapper.connect('ticketing', 'efj89j', 'http://nats-srv:4222');

    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

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
