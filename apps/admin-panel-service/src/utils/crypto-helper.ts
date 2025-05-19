import bcrypt from 'bcryptjs';
import 'dotenv/config';

/** Asynchronous function to hash a password using bcrypt */
export const hashAsync = async (password: string) => {
    return await bcrypt.hash(password, 10);
};

/** Asynchronous function to compare a password with a hashed password using bcrypt */
export const compareAsync = async (password: string, passwordHash: string) => {
    return await bcrypt.compare(password, passwordHash);
};