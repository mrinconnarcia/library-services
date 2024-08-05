// consumer.ts
import amqp from 'amqplib';

const rabbitSettings = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'guest',
  password: 'guest',
  vhost: '/',
};

const consumeMessages = async () => {
  try {
    const connection = await amqp.connect(rabbitSettings);
    const channel = await connection.createChannel();
    await channel.assertQueue('bookStatus', { durable: true });

    channel.consume('bookStatus', (msg) => {
      if (msg !== null) {
        const message = JSON.parse(msg.content.toString());
        console.log('Received message:', message);
        // Aquí puedes procesar el mensaje y realizar acciones según el estado del libro
        channel.ack(msg); // Confirma que el mensaje fue procesado
      }
    });
  } catch (err) {
    console.error('Failed to consume messages:', err);
  }
};

consumeMessages().catch(console.error);
