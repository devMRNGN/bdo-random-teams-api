const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Player = require("../../Models/Player");
const Guild = require("../../Models/Guild");

async function getGuild(family){
  try{
    const player = await Player.findOne({ family });
    if(!player){
      throw new ResError("player_not_found", 404);
    }

    const guild = await Guild.findOne({ players: player._id });
    if(!guild){
      throw new ResError("guild_not_found", 404);
    }

    return ResSuccess({
      payload: {
        data: { guild },
        mensagem: "success_player_guild_finded"
      },
      status: 200,
    });
  }catch(error){
    return {
      erro: true,
      status: error.status || 500,
      mensagem: error.message || "error",
    };
  }
}

module.exports = getGuild;