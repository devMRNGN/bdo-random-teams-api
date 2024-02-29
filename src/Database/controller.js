const db = require('mongoose');

require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbController = {};

dbController.dbConnect = () => {
    db.connect(`mongodb+srv://devmarangoni:${DB_PASSWORD}@cluster0.gln1zpz.mongodb.net/`)
    .then(() => {
        console.log(`Mongoose connected`);
    })
    .catch(error => {
        console.error(`Error when try to connect database`);
        console.error(error);
    });
};

dbController.dbDisconnect = () => {
    db.disconnect()
    .then(() => {
        console.log(`Mongoose disconnected`);
    })
    .catch(error => {
        console.error(`Error when try to disconnect database`);
        console.error(error);   
    });
}

module.exports = dbController;