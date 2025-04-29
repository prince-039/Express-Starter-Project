const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

/**
 * The below function helps to connect to a mongoDB server
 */
async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("successfully connected to mongoDB server .....");
    } catch (error) {
        console.log("Not able to connect to the mongoDB server");
         console.log(error);
    }
}

module.exports = connectDB;