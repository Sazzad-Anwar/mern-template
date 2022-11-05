import dotenv from 'dotenv';

dotenv.config();

export const config = {
    mongo: {
        url: process.env.MONGO_URI ?? ''
    },
    server: {
        port: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337,
        env: process.env.NODE_ENV ?? ''
    },
    accessToken: {
        secretKey: process.env.ACCESS_TOKEN_SECRET_KEY ?? '',
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN ?? ''
    },
    refreshToken: {
        secretKey: process.env.REFRESH_TOKEN_SECRET_KEY ?? '',
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN ?? ''
    }
};
