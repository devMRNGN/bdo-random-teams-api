const Response = require("../../Utils/Response");

const Player = require("../../Models/Player");

const dbController = require("../controller");

async function setPlayer(player){
  try{
    await dbController.dbConnect();

    const playerCreated = await Player.create(player);
    if(!playerCreated){
      return new Response({ message: "invalid_request" }, 400, true);
    }

    return new Response(
      {
        message: "success_player_created",
        data: { playerCreated }
      },
      201,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "set_player_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = setPlayer;