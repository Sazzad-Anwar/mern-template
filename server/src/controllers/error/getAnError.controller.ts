/**
 * * Get an error details info
 * ? Route: api/v1/error-logs/:id
 * ! Access: Only authenticated user
 */
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import createHttpError from 'http-errors';
import Error from '../../models/error.model';

const getAnError = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let error = await Error.findById(req.params.id);
    if (error) {
        res.json({
            isSuccess: true,
            message: `Error ${req.params.id} is found`
        });
    } else {
        next(new createHttpError.NotFound(`Error ${req.params.id} is  not found`));
    }
});

export default getAnError;
