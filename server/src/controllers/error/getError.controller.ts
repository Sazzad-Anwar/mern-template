/**
 * * Get all the logger info
 * ? Route: api/v1/error-logs
 * ! Access: Only authenticated user
 */
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Error from '../../models/error.model';

const getAllError = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let errors = await Error.find().lean();

    if (errors.length) {
        res.json({
            isSuccess: true,
            message: 'Successful',
            data: errors
        });
    } else {
        res.json({
            isSuccess: true,
            message: 'No data found !',
            data: errors
        });
    }
});

export default getAllError;
