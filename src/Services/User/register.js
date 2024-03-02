const ResError = require("../../Utils/Responses/Error");
const ResSuccess = require("../../Utils/Responses/Success");

const User = require("../../Models/User");

async function register(user){
  try{
    // CRIPTOGRAFAR A SENHA DO USUÁRIO ANTES DE SALVAR
    const createdUser = await User.create(user);

    if(!createdUser){
      throw new ResError("register_error", 404);
    }

    return ResSuccess({
      payload: {
        data: { createdUser },
        mensagem: "success_user_registered"
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

module.exports = register;