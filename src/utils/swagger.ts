import path from 'path';

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'To Do List - API',
            version: '1.0.0',
            description: 'API to manage a To Do List',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [path.join(__dirname, '../../src/routes/endpoints/*.ts')],
};
