/**
 * ?Generate password and compare password
 */

import bcrypt from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    return hash;
};

const isPasswordMatched = async (password: string, hashedPass: string): Promise<boolean> => await bcrypt.compare(password, hashedPass);

export { hashPassword, isPasswordMatched };
