import { Request } from 'express';

export type AuthUser = {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    avatar?: string;
    createdAt?: string;
    updatedAt?: string;
};

export interface IGetUserAuthInfoRequest extends Request {
    user: AuthUser;
}
