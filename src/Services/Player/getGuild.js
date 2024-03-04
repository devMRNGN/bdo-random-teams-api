const Response = require("../../Utils/Response");

const Player = require("../../Models/Player");
const Guild = require("../../Models/Guild");

const dbController = require("../controller");

async function getGuild(family){
  try{
    await dbController.dbConnect();

    const player = await Player.findOne({ family });
    if(!player){
      return new Response({ message: "player_not_found" }, 400, true);
    }

    const guild = await Guild.findOne({ players: player._id });
    if(!guild){
      return new Response({ message: "guild_not_found" }, 400, true);
    }

    return new Response(
      {
        message: "success_player_guild_finded",
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