export default {
    mongodbMemoryServerOptions: {
        instance: {
            dbName: 'jest'
        },
        binary: {
            version: '4.0.2', // Version of MongoDB
            skipMD5: true
        },
        autoStart: false
    },
    mongoURLEnvName: 'MONGODB_URI',
};