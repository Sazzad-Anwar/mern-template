require('dotenv').config();
export default {
    'url': process.env.NODE_ENV === 'dev' ? 'http://localhost:8080' : '',
    "env": "dev"
}