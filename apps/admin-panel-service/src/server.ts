import 'dotenv/config';
import { createServer } from 'http';
import { App } from './app';
import { Sequelize } from 'sequelize';
import { getMainDb } from './config/database';
import { env } from './utils/validate-env';

const app = new App();

// Create HTTP server
const httpServer = createServer(app.express);

export let sequelize: Sequelize;

try {
    (async () => {

        // Port
        const PORT = env.PORT;

        // Get DB Instance
        const sequelize = await getMainDb();

        // Authenticate database connection and sync models
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync({ alter: true });
        console.log('Sequelize OK');

        // Start the server
        httpServer.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} !`);
        });
    })();
} catch (err) {
    console.log('Error: ', err);
    console.log('Unable to connect to the database.');
}