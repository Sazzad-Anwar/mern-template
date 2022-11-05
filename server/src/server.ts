import express, { Express, Application } from 'express';
import { Server } from 'http';
import cors from 'cors';
import compression from 'compression';
import { config } from './config/config';
import dotenv from 'dotenv';
import dbConnection from './db/connect';
import { errorHandler, notFound } from './middleware/error.middleware';
import routesV1 from './routes/v1/route';
import morgan from 'morgan';
import fs from 'fs';
import { join } from 'path';

dotenv.config();

let app: Application = express();

/*
 * Connect to mongo
 */

dbConnection()
    .then(() => startServer())
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });

const startServer = () => {
    app.use(express.json());
    app.use(cors());
    config.server.env === 'production'
        ? app.use(
              morgan('combined', {
                  stream: fs.createWriteStream(join(__dirname, 'access.log'), { flags: 'a' })
              })
          )
        : app.use(morgan('dev'));
    app.use(compression());
    routesV1(app);
    app.use(notFound);
    app.use(errorHandler);

    let server: Server = app.listen(config.server.port, () => console.log(`Server is listening on port ${config.server.port}`));
};
