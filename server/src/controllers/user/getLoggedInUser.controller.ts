/**
 * * This controller works for getting all users
 * ! This is not an authenticated route's controller
 */

import { NextFunction, Request, Response } from 'express';
import User from '../../models/user.model';

const getLoggedInUser = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        let user = await User.findById(req.user._id).select('-password').lean();

        res.json({
            isSuccess: true,
            message: 'User details found',
            data: user
        });
    }
};

export default getLoggedInUser;
