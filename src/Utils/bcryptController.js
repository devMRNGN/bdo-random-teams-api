const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const bcryptController = {};

bcryptController.encrypt = async (password) => {
    try{
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return { error: false, password: hashedPassword };
    }catch(error){
        console.log("error when try to hash user password");
        return { error: true };
    }
};

bcryptController.validatePassword = async (password, hash) => {
    try{
        const isValidPassword = await bcrypt.compare(password, hash);
        return { error: false, isValidPassword };
    }catch(error){
        console.log("error when try to validate user password");
        return { error: true };
    }
};

module.exports = bcryptController;