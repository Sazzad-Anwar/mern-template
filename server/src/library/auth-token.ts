import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import expressAsyncHandler from 'express-async-handler';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

const getToken = async (data: any, tokenType: 'accessToken' | 'refreshToken') => {
    if (tokenType === 'accessToken') {
        if (config.accessToken.expiresIn && config.accessToken.secretKey) {
            try {
                let token: string = await jwt.sign(data, config.accessToken.secretKey, { expiresIn: config.accessToken.expiresIn });
                return token;
            } catch (error: any) {
                throw new Error(error);
            }
        } else if (!config.accessToken.secretKey) {
            throw new Error('ACCESS_TOKEN_SECRET_KEY is not found in your .env file!');
        } else if (!config.accessToken.expiresIn) {
            throw new Error('ACCESS_TOKEN_EXPIRES_IN is not found in your .env file!');
        }
    } else {
        if (config.refreshToken.expiresIn && config.refreshToken.secretKey) {
            try {
                let token: string = await jwt.sign(data, config.refreshToken.secretKey, { expiresIn: config.refreshToken.expiresIn });
                return token;
            } catch (error: any) {
                throw new Error(error);
            }
        } else if (!config.refreshToken.secretKey) {
            throw new Error('REFRESH_TOKEN_SECRET_KEY is not found in your .env file!');
        } else if (!config.refreshToken.expiresIn) {
            throw new Error('REFRESH_TOKEN_EXPIRES_IN is not found in your .env file!');
        }
    }
};

const tokenValidation = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token: string = req.headers.authorization ?? req.headers.access_token ?? req.headers.refresh_token ?? req.cookies.access_token ?? req.headers.refresh_token;

    if (token) {
        const bearerToken: string[] = token.split(' ');
        token = bearerToken[1];

        try {
            let decodedToken = await jwt.verify(
                token,
                req.headers.authorization || req.headers.access_token || req.cookies.access_token ? config.accessToken.secretKey : config.refreshToken.secretKey
            );
            req.user = decodedToken;
            next();
        } catch (error: any) {
            next(new createHttpError.Unauthorized(error.message));
        }
    } else {
        next(new createHttpError.Unauthorized());
    }
});

export { getToken, tokenValidation };
