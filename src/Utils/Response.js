class Response {
    constructor(payload, status, error){
        this.payload = payload;
        this.status = status;
        this.error = error;
    }
}

module.exports = Response;