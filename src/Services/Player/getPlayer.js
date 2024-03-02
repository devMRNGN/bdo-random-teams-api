const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const Player = require("../../Models/Player");
const User = require("../../Models/User");

const dbController = require("../controller");

async function getPlayer(username){
  try{
    dbController.dbConnect();
    
    const user = await User.findOne({ username });
    if(!user){
      throw new ResError("user_not_found", 404);
    }

    const player = await Player.findOne({ user: user._id });
    if(!player){
      throw new ResError("player_not_found", 404);
    }

    return ResSuccess({
      payload: {
        data: { player },
        mensagem: "success_player_finded"
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

module.exports = getPlayer;