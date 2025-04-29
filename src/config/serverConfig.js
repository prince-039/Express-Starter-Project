const dotenv = require('dotenv');

dotenv.config();

// Here we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL
}