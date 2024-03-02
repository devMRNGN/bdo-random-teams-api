const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Guild = require("../../Models/Guild");

const dbController = require("../controller");

async function setGuild(guild){
  try{
    dbController.dbConnect();

    const guild = await Guild.create(guild);
    if(!guild){
      throw new ResError("missing_data", 500);
    }

    return ResSuccess({
      payload: {
        data: { guild },
        mensagem: "success_guild_created"
      },
      status: 201,
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

module.exports = setGuild;