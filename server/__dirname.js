import { fileURLToPath } from 'url';
import path from 'path';

//Setup the __dirname on es module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default __dirname;