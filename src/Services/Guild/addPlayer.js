const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Guild = require("../../Models/Guild");
const Player = require("../../Models/Player");

const dbController = require("../controller");

async function addPlayer({ playerName, guildName }){
  try{
    dbController.dbConnect();

    const guild = await Guild.findOne({ name: guildName });
    if(!guild){
      throw new ResError("guild_not_found", 404);
    }

    const player = await Player.findOne({ family: playerName });
    if(!player){
        throw new ResError("player_not_found", 404);
    }

    guild.players.push(player._id);
    await guild.save();

    player.guild = guild._id;
    await player.save();

    return ResSuccess({
      payload: {
        data: { guild },
        mensagem: "success_player_added"
      },
      status: 200,
    });
  }catch(error){
    return {
      erro: true,
      status: error.status || 500,
      mensagem: error.message || "error",
    };
  }finally{
    dbController.dbDisconnect();
  }
}

module.exports = addPlayer;