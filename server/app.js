// @Description: All server running configuration is setting up here.
// @CreatedAt:
// @Author-name: Md. Sazzad Bin Anwar

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
// const connect_MongoDB = require('./config/db/MongoDB');
require('colors');
const port = process.env.PORT || 8080;
const {
    errorHandler,
    notFound
} = require('./middlewares/middlewares');

//This will show the request path for every request only for development mode
if (process.env.NODE_ENV !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('tiny'));
}

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();

//@Description: To use monogdb connection
// connect_MongoDB('project_template');


app.use('/api/v1/', require('./routes/AppRoute'));
app.get('/api/v1/checkStatus', (req, res) => res.json({ status: 'Ok', host: req.hostname }));

app.use(errorHandler);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     console.log('Build file connected');
// });
app.use(notFound);

app.listen(port, () => console.log(`App is listening on port ${port}!`.cyan.underline));

process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        debug('HTTP server closed')
    })
})