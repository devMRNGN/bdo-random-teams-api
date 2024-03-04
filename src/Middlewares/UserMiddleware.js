const verifyRegister = (request, response, next) => {
    try{
        const { username, password, email } = request.body;

        if(username && password && email){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_register_data: [
                "username",
                "password",
                "email"
            ]
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_register_middleware_error" });
    }
};

const verifyLogin = (request, response, next) => {
    try{
        const { username, password } = request.body;

        if(username && password){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_login_data: [
                "username",
                "password"
            ]
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_login_middleware_error" });
    }
};

module.exports = {
    verifyRegister,
    verifyLogin
};