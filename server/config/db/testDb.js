// tests/db.js

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import client from './redis';

let mongoServer;

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Provide connection to a new in-memory database server.
const connect = async () => {
    // NOTE: before establishing a new connection close previous
    await mongoose.disconnect();
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = await mongoServer.getUri();
    mongoose.connect(mongoUri, opts, err => {
        if (err) {
            console.error(err);
        }
    });
};

// Remove and close the database and server.
const close = async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    await client.quit();
};

export {
    connect,
    close,
};