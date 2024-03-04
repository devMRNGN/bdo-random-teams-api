const Response = require("../../Utils/Response");

const User = require("../../Models/User");

const dbController = require("../controller");

const bcryptController = require("../../Utils/bcryptController");
const tokenController = require("../../Middlewares/fastJsonWebTokenController");

async function login({ username, password }){
  try{
    await dbController.dbConnect();

    const user = await User.findOne({ username }).exec();
    if(!user){
      return new Response({ message: "user_not_found" }, 400, true);
    }

    const compare = await bcryptController.validatePassword(password, user.password);
    if(compare.error){
      return new Response({ message: "validate_password_error" }, 400, true);
    }

    if(!compare.isValidPassword){
      return new Response({ message: "invalid_password" }, 400, true);
    }

    const token = await tokenController.generateToken();
    return new Response(
      {
        message: "success_login",
        token
      },
      200,
      false
    );
  }catch(error){
    console.log(error);
    return new Response({ message: "login_function_error" }, 400, true);
  }finally{
    await dbController.dbDisconnect();
  }
}

module.exports = login;