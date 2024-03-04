const Response = require("../../Utils/Response");

const Guild = require("../../Models/Guild");
const Player = require("../../Models/Player");

const dbController = require("../controller");

async function addPlayer({ familyPlayerName, guildName }){
  try{
    await dbController.dbConnect();

    const guild = await Guild.findOne({ name: guildName });
    if(!guild){
      return new Response({ message: "guild_not_found" }, 400, true);
    }

    const player = await Player.findOne({ family: familyPlayerName });
    if(!player){
      return new Response({ message: "player_not_found" }, 400, true);
    }

    guild.players.push(player._id);
    await guild.save();

    player.guild = guild._id;
    await player.save();

    return new Response(
      {
        message: "success_player_added",
        data: { guild }
      },
      201,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "add_player_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = addPlayer;