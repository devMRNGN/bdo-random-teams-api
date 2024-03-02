const db = require("mongoose");
const { Schema, model } = db;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

const User = db.model("User", userSchema);
module.exports = User;