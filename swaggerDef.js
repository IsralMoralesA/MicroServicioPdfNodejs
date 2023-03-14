const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'reportingpdfs API',
        version: '1.0.0',
        description: 'Microservice reportingpdfs API',
    },
    servers: [
        { url: 'http://localhost:5106' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
