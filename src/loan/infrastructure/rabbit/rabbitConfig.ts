// rabbitConfig.ts
import amqp from 'amqplib';

const rabbitSettings = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'guest',
  password: 'guest',
  vhost: '/',
};

let channel: amqp.Channel;

const connect = async () => {
  try {
    const connection = await amqp.connect(rabbitSettings);
    channel = await connection.createChannel();
    console.log('RabbitMQ connected...');
  } catch (err) {
    console.error('Failed to connect to RabbitMQ:', err);
    process.exit(1);
  }
};

export const sendMessage = async (queue: string, message: any) => {
  if (!channel) {
    await connect();
  }
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
};

export default connect;
