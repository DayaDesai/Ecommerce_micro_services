import { QueryInterface } from 'sequelize';
import { insertRoleData, insertUserData, deleteUserData, deleteRoleData } from '../utils/db-inits';
import { getMainDb } from '../config/database';

/** @type {import('sequelize-cli').Migration} */

const initDb = async () => {
  const db = await getMainDb();
  await db.sync({ alter: true });
};

export default {
  async up() {
    // Initialize and configure the database connection and Sequelize models
    await initDb();

    // Role
    await insertRoleData();
    // User
    await insertUserData();

  },

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  async down(QueryInterface: QueryInterface) {
    // Initialize and configure the database connection and Sequelize models
    await initDb();

    // User
    await deleteUserData(QueryInterface);
    // Role
    await deleteRoleData(QueryInterface);
  }
};
