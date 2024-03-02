const userController = {};

userController.login = async (request, response) => {
    try{
        const { username, password } = request.body;
    }catch(error){

    }
}

userController.register = async (request, response) => {}

module.exports = userController;