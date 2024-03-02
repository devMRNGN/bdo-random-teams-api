const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Guild = require("../../Models/Guild");

async function setGuild(guild){
  try{
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
  }
}

module.exports = setGuild;