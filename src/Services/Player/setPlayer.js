const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Player = require("../../Models/Player");

const dbController = require("../controller");

async function setPlayer(player){
  try{
    dbController.dbConnect();

    const playerCreated = await Player.create(player);
    if(!playerCreated){
      throw new ResError("missing_data", 500);
    }

    return ResSuccess({
      mensagem: "success",
      payload: {
        data: { playerCreated },
        mensagem: "success_player_created"
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

module.exports = setPlayer;