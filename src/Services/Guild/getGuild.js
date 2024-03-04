const Response = require("../../Utils/Response");

const Guild = require("../../Models/Guild");

const dbController = require("../controller");

async function getGuild(name){
  try{
    await dbController.dbConnect();

    const guild = await Guild.findOne({ name }).exec();
    if(!guild){
      return new Response({ message: "guild_not_found" }, 400, true);
    }

    return new Response(
      {
        message: "success_guild_finded",
        data: { guild }
      },
      200,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "get_guild_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = getGuild;