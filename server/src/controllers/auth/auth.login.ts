/**
 * * Login user controller
 * ? Route: api/v1/auth/login
 * ! Access: Public route
 *  @email , @password
 */

import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { config } from '../../config/config';
import { getToken } from '../../library/auth-token';
import { isPasswordMatched } from '../../library/password';
import User from '../../models/user.model';
import { loginRequestValidator } from '../../validators/user.validator';

const login = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let { email, password }: { email: string; password: string } = await loginRequestValidator.validateAsync(req.body);

    let userFound = await User.findOne({ email });

    if (userFound) {
        if (await isPasswordMatched(password, userFound.password!)) {
            let user = await User.findById(userFound._id).select('-password -_v').lean();

            let refresh_token = await getToken({ _id: user?._id }, 'refreshToken');
            userFound.refresh_token = refresh_token;
            let access_token = await getToken(user, 'accessToken');
            await userFound.save();

            res.cookie('access_token', `Bearer ${access_token}`, {
                httpOnly: true,
                sameSite: 'strict',
                path: '/',
                expires: new Date(Date.now() + parseInt(config.accessToken.expiresIn)),
                secure: config.server.env === 'production' ? true : false
            });

            res.json({
                isSuccess: true,
                message: 'Logged in successfully',
                access_token,
                refresh_token
            });
        }
    }
});

export default login;
