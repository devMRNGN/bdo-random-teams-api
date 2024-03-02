const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const User = require("../../Models/User");

const dbController = require("../controller");

async function login({ username, password }){
  try{
    dbController.dbConnect();

    const user = await User.findOne({ username, password });
    if(!user){
      throw new ResError("not_found", 404);
    }

    return ResSuccess({
      payload: {
        data: { /* USER TOKEN */ },
        mensagem: "success_login"
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

module.exports = login;