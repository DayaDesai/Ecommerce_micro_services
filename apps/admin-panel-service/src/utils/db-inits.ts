import {  QueryInterface } from 'sequelize';
import { USERS } from '../constants/user.constant';
import { ROLES } from '../constants/role.constant';
import { MODULES } from '../constants/module.constant';
import { hashAsync } from '../utils/crypto-helper';
import { Role } from '../models/main/role.model';
import { User } from '../models/main/user.model';
import { Module } from '../models/main/module.model';

/** Method to insert Role data  */
export const insertRoleData = async () => {
    try {
        const existingRoles = await Role.findAll({ attributes: ['name'] });
        const existingRoleNames = existingRoles.map(role => role.name);

        const newRoles = ROLES.filter(role => !existingRoleNames.includes(role.name));

        if (newRoles.length > 0) {
            await Role.bulkCreate(newRoles, {
                updateOnDuplicate: ['name'],
            });
            console.log('New role data successfully inserted!');
        } else {
            console.log('All role data already exists. No new roles inserted.');
        }
    } catch (error) {
        console.error('Error inserting role data:', error);
        throw error;
    }
};


/** Method to delete Role data  */
export const deleteRoleData = async (queryInterface: QueryInterface) => {
    try {
        await queryInterface.bulkDelete('role', {
            name: ROLES.map(role => role.name),
        }, {});
        console.log('Role data successfully deleted!');
    } catch (error) {
        console.error('Error deleting role data:', error);
        throw error;
    }
};

/** Method to insert User data */
/** Method to insert User data */
export const insertUserData = async () => {
    try {
        const roles = await Role.findAll();
        const existingUsers = await User.findAll({ attributes: ['email'] });
        const existingEmails = existingUsers.map(user => user.email);

        const users = await Promise.all(
            USERS.map(async (user) => {
                const role = roles.find(role => role.name === user.name);
                user.password = await hashAsync(user.password);

                return {
                    ...user,
                    role_id: role?.id || ''
                };
            })
        );

        const newUsers = users.filter(user => !existingEmails.includes(user.email));

        if (newUsers.length > 0) {
            await User.bulkCreate(newUsers, {
                updateOnDuplicate: ['email'],
            });
            console.log('New user data successfully inserted!');
        } else {
            console.log('All user data already exists. No new users inserted.');
        }
    } catch (error) {
        console.error('Error inserting user data:', error);
        throw error;
    }
};

/** Method to delete User data  */
export const deleteUserData = async (queryInterface: QueryInterface) => {
    try {
        await queryInterface.bulkDelete('user', {
            email: USERS.map(user => user.email)
        }, {});
        console.log('User data successfully deleted!');
    } catch (error) {
        console.error('Error deleting user data:', error);
        throw error;
    }
};

/** Method to insert module data */
export const insertModuleData = async () => {
    try {
        await Module.bulkCreate(MODULES, {
            updateOnDuplicate: [
                'name'
            ],
        });
        console.log('Module data successfully inserted!');
    } catch (error) {
        console.error('Error inserting module data:', error);
        throw error;
    }
};

/** Method to delete Module data  */
export const deleteModuleData = async (queryInterface: QueryInterface) => {
    try {
        await queryInterface.bulkDelete('module', {
            name: MODULES.map(module => module.name),
        }, {});
        console.log('Module data successfully deleted!');
    } catch (error) {
        console.error('Error deleting module data:', error);
        throw error;
    }
};
