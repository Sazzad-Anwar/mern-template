import { connect } from 'mongoose';
import { config } from '../config/config';

const dbConnection = async () => {
    try {
        const conn = await connect(config.mongo.url);
        console.log(`Mongodb is connected to ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
};

export default dbConnection;
