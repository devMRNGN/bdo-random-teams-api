const { validateRequest } = require("../Utils/validateRequest");

const verifySetPlayer = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                user: "object_id",
                family: "string",
            },
            optional: {
                classe: "string",
                level: "integer",
                gearScore: "integer",
                guild: "object_id",
            }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_set_player_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_set_player_middleware_error" });
    }
};

const verifyGetPlayer = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                family: "string",
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
            required_get_player_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_get_player_middleware_error" });
    }
};

const verifyGetPlayerGuild = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                family: "string",
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
            required_get_player_guild_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_get_player_guild_middleware_error" });
    }
};

module.exports = {
    verifySetPlayer,
    verifyGetPlayer,
    verifyGetPlayerGuild
};