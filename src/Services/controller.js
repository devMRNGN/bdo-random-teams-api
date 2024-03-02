const db = require('mongoose');

require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbController = {};

dbController.dbConnect = async () => {
    try{
        await db.connect(`mongodb+srv://devmarangoni:${DB_PASSWORD}@cluster0.h1jmwbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`Mongoose connected`);
    }catch(error){
        console.error(`Error when try to connect database`);
        console.error(error);
    }
};

dbController.dbDisconnect = async () => {
    try{
        await db.disconnect();
        console.log(`Mongoose disconnected`);
    }catch(error){
        console.error(`Error when try to disconnect database`);
        console.error(error);
    }
}

module.exports = dbController;