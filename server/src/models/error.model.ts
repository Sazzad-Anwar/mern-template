import { CustomErrorType } from './../middleware/logger.middleware';
import { Schema, model } from 'mongoose';

let ErrorSchema = new Schema<CustomErrorType>(
    {
        IP: { type: String, required: true },
        message: { type: String, required: true },
        requestRoute: { type: String, required: true },
        stack: { type: String, required: true },
        userAgent: { type: String, required: true }
    },
    { timestamps: true }
);

let Error = model('Error', ErrorSchema);

export default Error;
