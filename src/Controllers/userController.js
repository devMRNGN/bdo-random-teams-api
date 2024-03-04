const registerUser = require("../Services/User/register");
const loginUser = require("../Services/User/login");

const userController = {};

userController.login = async (request, response) => {
    try{
        console.log(request.body);
        const login = request.body;
        const { payload, status, error } = await loginUser(login);

        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "User controller login function error" });
    }
}

userController.register = async (request, response) => {
    try{
        const user = request.body;
        const { payload, status, error } = await registerUser(user);
        
        return response.status(status).send(payload);
    }catch(error){
        console.log(error);
        return response.status(400).send({ message: "User controller registerer function error" });
    }
}

module.exports = userController;