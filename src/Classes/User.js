class User {
    constructor(username, login, password, email){
        this.username = username;
        this.login = login;
        this.password = password;
        this.email = email;
    }

    login(username, password){
        // Chama o controle do banco que verifica o login
        // Retorna para a ROTA (OK/ERROR)
    }

    register(){
        // Chama o controller do banco que registra
        // Retorna para ROTA (OK/ERROR)
    }
}

module.exports = User;