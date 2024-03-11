const dotenv = require('dotenv');
dotenv.config();
exports.GRAPHCSM_URL = process.env.GRAPHCSM_URL;
exports.STORAGE_BUCKET = process.env.STORAGE_BUCKET;
exports.PROJECT_ID = process.env.PROJECT_ID;
exports.ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;
exports.CLIENT_EMAIL = process.env.CLIENT_EMAIL;
exports.GOOGLE_CREDS = process.env.GOOGLE_CREDS;

