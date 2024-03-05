const db = require("mongoose");
const { Schema, SchemaTypes } = db;

const playerSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        require: true,
    },
    family: String,
    classe: String,
    level: Number,
    gearScore: Number,
    guild: {
        type: SchemaTypes.ObjectId,
        ref: "Guild",
        required: false,
    },
});

const Player = db.model("Player", playerSchema);
module.exports = Player;