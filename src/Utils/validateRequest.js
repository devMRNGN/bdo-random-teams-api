const validateRequest = (validReq, customerReq) => {
    const necessaryKeys = Object.keys(validReq.necessary);
    const optionalKeys = Object.keys(validReq.optional);
    const customerKeys = Object.keys(customerReq);

    for(let property of necessaryKeys){
        if(!customerKeys.includes(property)){
            return false;
        }

        if (!customerReq[property]) {
            return false;
        }
    }

    for(let property of customerKeys){
        if(!necessaryKeys.includes(property) && !optionalKeys.includes(property)){
            return false;
        }
    }

    return true;
};

module.exports = { validateRequest };