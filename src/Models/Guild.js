const db = require("mongoose");
const { Schema, SchemaTypes } = db;

const guildSchema = new Schema({
    name: String,
    image: String,
    leader: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    size: String,
    players: [{
        type: SchemaTypes.ObjectId,
        ref: "Player",
        required: false,
    }],
});

const Guild = db.model('Guild', guildSchema);
module.exports = Guild;