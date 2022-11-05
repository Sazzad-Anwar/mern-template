import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { config } from '../config/config';
import createHttpError from 'http-errors';
import logger, { CustomErrorType } from './logger.middleware';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode: number = err.isJoi ? 422 : err.statusCode ?? 500;

    if (err) {
        let newError: CustomErrorType = {
            message: err.message,
            userAgent: req.headers['user-agent'] ?? '',
            requestRoute: `[${req.method}]-${req.hostname}${req.originalUrl}`,
            IP: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
            stack: err.stack
        };

        if (config.server.env === 'development') {
            logger(newError);
        } else {
            console.error(newError);
        }

        res.status(statusCode).json({
            isSuccess: false,
            statusCode: statusCode,
            message: err.message,
            stack: config.server.env === 'production' || config.server.env === 'test' ? null : err.stack
        });
    } else {
        next();
    }
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound(`[${req.method}]-${req.hostname}${req.originalUrl} is Not Found`));
};

export { errorHandler, notFound };
