import 'dotenv/config';
import { createServer } from 'http';
import { App } from './app';
import { Sequelize } from 'sequelize';

const app = new App();

// Create HTTP server
const httpServer = createServer(app.express);

export let sequelize: Sequelize;

try {
    (async () => {
        // Start the server
        httpServer.listen(8084, () => {
            console.log(`Server is running on port 8084 !`);
        });
    })();
} catch (err) {
    console.log('Error: ', err);
    console.log('Unable to connect to the database.');
}