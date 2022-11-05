/**
 * * This controller works for creating a user
 * ! This is not an authenticated route's controller
 */

import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import createHttpError from 'http-errors';
import { config } from '../../config/config';
import { getToken } from '../../library/auth-token';
import { hashPassword } from '../../library/password';
import User, { UserType } from '../../models/user.model';
import { registerUserRequestValidator } from '../../validators/user.validator';

const createUser = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let { name, email, userName, phoneNumber, avatar, password }: UserType = await registerUserRequestValidator.validateAsync(req.body);

    let user = await User.findOne({ name, email, phoneNumber });

    if (user) {
        next(new createHttpError.Conflict('User already registered'));
    } else {
        password = await hashPassword(password!);
        let userDetails = {
            name,
            userName,
            email,
            phoneNumber,
            avatar
        };
        let newUser = new User(userDetails);

        let refresh_token = await getToken({ _id: newUser._id }, 'refreshToken');
        newUser.refresh_token = refresh_token;
        let access_token = await getToken({ ...userDetails, refresh_token }, 'accessToken');
        newUser.password = password;
        let user = await newUser.save();

        res.cookie('access_token', `Bearer ${access_token}`, {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
            expires: new Date(Date.now() + parseInt(config.accessToken.expiresIn)),
            secure: config.server.env === 'production' ? true : false
        });

        res.status(201).json({
            isSuccess: true,
            message: 'User is registered successfully',
            data: {
                access_token,
                refresh_token,
                user
            }
        });
    }
});

export default createUser;
