require("dotenv").config;
const JWT_PASSWORD = process.env.JWT_PASSWORD;

const { createSigner } = require("fast-jwt");

const fastJsonWebTokenController = {};

fastJsonWebTokenController.generateToken = async () => {
    try{
        const signSync = createSigner({ key: JWT_PASSWORD });
        const token = signSync({ a: 1, b: 2, c: 3 });
        return token;
    }catch(error){
        console.log(`Error when try to generate jwt`);
        console.error(error);
        return "obtain_token_error";
    }
};

fastJsonWebTokenController.validateToken = async () => {
    // implementar função para validar tokens
};

module.exports = fastJsonWebTokenController;