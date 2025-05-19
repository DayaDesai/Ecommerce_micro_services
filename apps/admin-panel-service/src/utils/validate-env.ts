import { cleanEnv, port, str } from 'envalid';

export const env = cleanEnv(process.env, {
    // Server Environment
    NODE_ENV: str(),

    // API Port
    PORT: port(),

    // Database Configuration
    MYSQL_HOST: str(),
    MYSQL_USER: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_PORT: port(),
    DB_NAME: str(),
    
});