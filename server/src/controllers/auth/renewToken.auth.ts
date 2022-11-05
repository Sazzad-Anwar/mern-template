/**
 * * Get new tokens controller
 * ? Route: api/v1/auth/renew-token
 * ! Access: Public route
 *  @refreshToken
 */

import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import mongoose, { ObjectId } from 'mongoose';
import { config } from '../../config/config';
import { getToken } from '../../library/auth-token';
import User from '../../models/user.model';
import { refreshTokenRequestValidation } from '../../validators/user.validator';

type RequestBody = {
    refresh_token: string;
    userId: string;
};

const renewToken = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let { refresh_token, userId }: RequestBody = await refreshTokenRequestValidation.validateAsync(req.body);

    if (mongoose.Types.ObjectId.isValid(userId)) {
        let user = await User.findById(userId);

        if (user?.refresh_token === refresh_token) {
            let userDetails = await User.findById(userId).select('-password').lean();

            let refresh_token = await getToken({ _id: userDetails?._id }, 'refreshToken');
            userDetails!.refresh_token = refresh_token;
            let access_token = await getToken(userDetails, 'accessToken');

            res.cookie('access_token', `Bearer ${access_token}`, {
                httpOnly: true,
                sameSite: 'strict',
                path: '/',
                expires: new Date(Date.now() + parseInt(config.accessToken.expiresIn)),
                secure: config.server.env === 'production' ? true : false
            });

            res.json({
                isSuccess: true,
                message: 'Token renewed successfully',
                access_token,
                refresh_token
            });
        }
    }
});

export default renewToken;
