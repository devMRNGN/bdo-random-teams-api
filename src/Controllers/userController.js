const userController = {};

userController.login = async (request, response) => {
    const { username, password } = request.body;
}

userController.register = async (request, response) => {}

module.exports = userController;