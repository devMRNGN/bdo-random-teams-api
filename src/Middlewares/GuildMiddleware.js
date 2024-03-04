const { validateRequest } = require("../Utils/validateRequest");

const verifySetGuild = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                name: "string",
                leader: "user_object_id"
            },
            optional: {
                image: "string",
                size: "string",
                players: "Array<player_object_id>"
            }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_set_guild_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_set_guild_middleware_error" });
    }
};

const verifyGetGuild = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                guildName: "string",
            },
            optional: { }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_get_guild_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_get_guild_middleware_error" });
    }
};

const verifyAddPlayer = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                familyPlayerName: "string",
                guildName: "string"
            },
            optional: { }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_add_player_guild_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_add_player_guild_middleware_error" });
    }
};

module.exports = {
    verifySetGuild,
    verifyGetGuild,
    verifyAddPlayer
};