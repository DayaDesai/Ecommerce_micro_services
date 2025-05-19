import { Sequelize } from 'sequelize';
import 'dotenv/config';
import { env } from '../utils/validate-env';
import config from './config';
import { initTenantMySQLModels } from '../models/tenant/index.model';
import { initMainMySQLModels } from '../models/main/index.model';
const tenantConnections: Record<string, Sequelize> = {};
let mainConnection: Sequelize | null = null;

const environment: keyof typeof config = (env.NODE_ENV as keyof typeof config) || 'development';
const dbConfig = config[environment];

export const getTenantDb = async (tenantId: string): Promise<Sequelize> => {
	if (!tenantConnections[tenantId]) {
		const db = new Sequelize(
			tenantId,
			dbConfig.username,
			dbConfig.password,
			{
				host: dbConfig.host,
				port: dbConfig.port,
				dialect: dbConfig.dialect,
				logging: false,
			}
		);

		// Initialize tenant models
		initTenantMySQLModels(db);

		tenantConnections[tenantId] = db;
	}

	return tenantConnections[tenantId];
};

export const getMainDb = async (): Promise<Sequelize> => {
	if (!mainConnection) {
		const db = new Sequelize(
			dbConfig.database,
			dbConfig.username,
			dbConfig.password,
			{
				host: dbConfig.host,
				port: dbConfig.port,
				dialect: dbConfig.dialect,
				logging: false,
			}
		);

		// Initialize main models
		initMainMySQLModels(db);

		mainConnection = db;
	}

	return mainConnection;
}

export { initMainMySQLModels, initTenantMySQLModels };

