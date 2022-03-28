import Sequelize from 'sequelize';

const db = process.env.NODE_ENV !== 'production' ?
    new Sequelize(process.env.SERVER_DB_DATABASE, 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

    }) : new Sequelize(process.env.SERVER_DB_DATABASE, process.env.SERVER_DB_USER, process.env.SERVER_DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

    })



db.authenticate()
    .then(() => {
        console.log('Database is connected successfully.');
    })
    .catch(err => {
        console.log(err)
    })

export default { db };