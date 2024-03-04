const Response = require("../../Utils/Response");

const Player = require("../../Models/Player");
const User = require("../../Models/User");

const dbController = require("../controller");

async function getPlayer(family){
  try{
    await dbController.dbConnect();

    const player = await Player.findOne({ family }).exec();
    if(!player){
      return new Response({ message: "player_not_found" }, 400, true);
    }

    return new Response(
      {
        message: "success_player_finded",
        data: { player }
      },
      200,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "get_player_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = getPlayer;