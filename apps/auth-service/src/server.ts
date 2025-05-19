import 'dotenv/config';
import { createServer } from 'http';
import { App } from './app';
import { Sequelize } from 'sequelize';
import { getMainDb } from '@nodejs_microservice_architecture/db-core/database';

const app = new App();

// Create HTTP server
const httpServer = createServer(app.express);

export let sequelize: Sequelize;

try {
    (async () => {

        const sequelize = await getMainDb();

        // Authenticate database connection and sync models
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync({ alter: true });
        console.log('Sequelize OK');

        // Start the server
        httpServer.listen(8081, () => {
            console.log(`Server is running on port 8081`);
        });
    })();
} catch (err) {
    console.log('Error: ', err);
    console.log('Unable to connect to the database.');
}