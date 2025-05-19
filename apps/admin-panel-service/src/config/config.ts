import 'dotenv/config';
import { env } from '../utils/validate-env';
import { Dialect } from 'sequelize';

export = {
    development: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: env.DB_NAME,
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        dialect: 'mysql' as Dialect
    },
    staging: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: env.DB_NAME,
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        dialect: 'mysql' as Dialect
    },
    production: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: env.DB_NAME,
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        dialect: 'mysql' as Dialect
    }
}