import { createClient } from 'redis';
const client = createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
});

client.on('connect', () => {
    console.log(`Redis client has connected`);
});

process.on('SIGINT', () => {
    client.quit();
});

export default client;