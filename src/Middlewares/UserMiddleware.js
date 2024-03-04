const { validateRequest } = require("../Utils/validateRequest");

const verifyRegister = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                username: "string",
                password: "string",
                email: "string"
            },
            optional: { }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_register_data: validReq
        }});
    }catch(error){
        console.error(error);
        return response.status(400).json({ message: "verify_register_middleware_error" });
    }
};

const verifyLogin = (request, response, next) => {
    try{
        const validReq = {
            necessary: {
                username: "string",
                password: "string"
            },
            optional: { }
        };
        const costumerReq = request.body;

        const isValidRequest = validateRequest(validReq, costumerReq);
        if(isValidRequest){
            next();
            return;
        }
  
        return response.status(400).json({ missing_data: {
            required_login_data: validReq
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