import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import __dirname from '../__dirname.js';

const removeFile = (fileLink) => {
    let dir = join(__dirname, `./public/${fileLink}`);

    try {
        let files = readFileSync(dir);

        if (files) {
            unlinkSync(dir);
            return { isSuccess: true, message: 'file has been removed' }
        } else {
            return { isSuccess: false, message: 'file link is invalid' }
        }

    } catch (error) {
        return { isSuccess: false, message: error.message }
    }
}


export default removeFile;