/**
 * * Create a logger info
 * ? Route: api/v1/error-logs
 * ! Access: Only authenticated user
 */
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Error from '../../models/error.model';
import { createErrorLogValidation } from '../../validators/error.validators';
import { CustomErrorType } from './../../middleware/logger.middleware';

const createErrorLog = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let { IP, message, requestRoute, stack, userAgent }: CustomErrorType = await createErrorLogValidation.validateAsync(req.body);

    let newError = new Error({
        IP,
        message,
        requestRoute,
        stack,
        userAgent
    });

    let error = await newError.save();

    res.status(201).json({
        isSuccess: true,
        message: 'Error is saved to db',
        data: error
    });
});

export default createErrorLog;
