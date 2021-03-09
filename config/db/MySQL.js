//jshint esversion:10

var mysql = require('mysql');
const util = require('util');
require('dotenv').config();

if (process.env.NODE_ENV === "development") {
        var conn = mysql.createPool({
                connectionLimit: 100,
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'yourcare'
        });

        // Promisify for Node.js async/await.
        exports.query = util.promisify(conn.query).bind(conn);
        exports.MySQL_connection = conn;
} else {

        var conn = mysql.createPool({
                host: process.env.SERVER_DB_HOST,
                user: process.env.SERVER_DB_USER,
                password: process.env.SERVER_DB_PASSWORD,
                database: process.env.SERVER_DB_DATABASE,
                port: process.env.SERVER_DB_PORT
        });

        // Promisify for Node.js async/await.
        exports.query = util.promisify(conn.query).bind(conn);
        exports.MySQL_connection = conn;
}