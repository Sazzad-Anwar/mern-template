// @Description: All server running configuration is setting up here.
// @CreatedAt:
// @Author-name: Md. Sazzad Bin Anwar

import express, { json, urlencoded } from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import compression from 'compression';
import favicon from 'serve-favicon';
import connectMongoDB from './config/db/MongoDB.js';
import __dirname from './__dirname.js';
import appRoute from './routes/AppRoute.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
dotenv.config();


//This will show the request path for every request only for development mode
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('tiny'));
}

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'dist')));
app.use(favicon(join(__dirname, 'public/images', 'favicon.ico')));

//@Description: To use monogdb connection
connectMongoDB();

app.use('/api/v1', appRoute);
app.get('/api/v1/checkStatus', (req, res) => res.json({ status: 'Ok', host: req.hostname }));

app.use(errorHandler);

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
    console.log('Build file connected');
});
app.use(notFound);

export default app;