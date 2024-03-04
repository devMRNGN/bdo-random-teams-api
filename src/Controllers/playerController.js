const setPlayer = require("../Services/Player/setPlayer");
const getPlayer = require("../Services/Player/getPlayer");
const getGuild = require("../Services/Player/getGuild");

const playerController = {};

playerController.setPlayer = async (request, response) => {
    try{
        const player = request.body;
        const { payload, status, error } = await setPlayer(player);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Player controller set player function error" });
    }
}

playerController.getPlayer = async (request, response) => {
    try{
        const { family } = request.body;
        const { payload, status, error } = await getPlayer(family);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Player controller get player function error" });
    }
}

playerController.getGuild = async (request, response) => {
    try{
        const { family } = request.body;
        const { payload, status, error } = await getGuild(family);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "Player controller get player guild function error" });
    }
}

module.exports = playerController;