const Response = require("../../Utils/Response");

const Guild = require("../../Models/Guild");

const dbController = require("../controller");

async function setGuild(guild){
  try{
    await dbController.dbConnect();

    const guildCreated = await Guild.create(guild);
    if(!guildCreated){
      return new Response({ message: "invalid_request" }, 400, true);
    }

    return new Response(
      {
        message: "success_guild_created",
        data: { guildCreated }
      },
      201,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "set_guild_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = setGuild;