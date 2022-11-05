import { Schema, model, SchemaType } from 'mongoose';

export type UserType = {
    name: string;
    userName: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    avatar?: string;
    password?: string;
    refresh_token?: string;
};

const userSchema = new Schema<UserType>(
    {
        name: { type: String, required: true, index: true },
        userName: { type: String, required: true, index: true, unique: true },
        email: { type: String, required: true, index: true },
        avatar: String,
        phoneNumber: { type: String, required: true, index: true },
        isActive: { type: Boolean, required: true, default: false },
        password: { type: String, required: true },
        refresh_token: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const User = model<UserType>('User', userSchema);

export default User;
