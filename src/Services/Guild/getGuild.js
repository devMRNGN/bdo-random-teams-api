const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Guild = require("../../Models/Guild");

const dbController = require("../controller");

async function getGuild(name){
  try{
    dbController.dbConnect();

    const guild = await Guild.findOne({ name });
    if(!guild){
      throw new ResError("guild_not_found", 404);
    }

    return ResSuccess({
      payload: {
        data: { guild },
        mensagem: "success_guild_finded"
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

module.exports = getGuild;