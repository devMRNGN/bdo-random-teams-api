const setGuild = require("../Services/Guild/setGuild");
const getGuild = require("../Services/Guild/getGuild");
const addPlayer = require("../Services/Guild/addPlayer");

const guildController = {};

guildController.setGuild = async (request, response) => {
    try{
        const guild = request.body;
        const { payload, status, error } = await setGuild(guild);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Guild controller set guild function error" });
    }
}

guildController.getGuild = async (request, response) => {
    try{
        const { guildName } = request.body;
        const { payload, status, error } = await getGuild(guildName);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Guild controller get guild function error" });
    }
}

guildController.addPlayer = async (request, response) => {
    try{
        const data = request.body;
        const { payload, status, error } = await addPlayer(data);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Guild controller add player function error" });
    }
}

module.exports =  guildController;