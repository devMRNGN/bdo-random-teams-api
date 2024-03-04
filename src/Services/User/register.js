const Response = require("../../Utils/Response");

const User = require("../../Models/User");

const dbController = require("../controller");

const bcryptController = require("../../Utils/bcryptController");
const tokenController = require("../../Middlewares/fastJsonWebTokenController");

async function register(user){
  try{
    await dbController.dbConnect();

    const encrypt = await bcryptController.encrypt(user.password);
    if(encrypt.error || !encrypt.password){
      return new Response({ message: "encrypt_password_error"}, 500, true);
    }

    user.password = encrypt.password;
    const createdUser = await User.create(user);
    if(!createdUser){
      return new Response({ message: "invalid_request"}, 500, true);
    }

    const token = await tokenController.generateToken();
    return new Response(
      {
        message: "success_user_registered",
        token,
        data: { createdUser }
      },
      201,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "registerer_function_error"}, 500, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = register;