import { RouteEnums } from '../routes/routes.types';

export enum Config {
    BaseUrl = 'https://jsonplaceholder.typicode.com',
    BrandName = 'Admin',
    Logo = '/images/logo.svg',
    LoginImage = '/images/login-image.webp',
    LogoIcon = '/logo512.png',
    LogoIco = '/favicon.ico',
}

export const UnAuthRoutes: string[] = [RouteEnums.Login, RouteEnums.NotFound];
