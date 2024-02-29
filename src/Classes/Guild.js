class Guild {
    constructor(name, leader, size, players){
        this.name = name;
        this.leader = leader;
        this.size = size;
        this.players = players;
    }

    setGuild(){
        // CHAMA O CONTROLLER DO BANCO QUE SALVA OS DAODS NO BANCO 
        // RETORNA PARA A ROTA
    }

    getGuild(){
        // CHAMA O CONTROLELR DO BANCO QUE IRÁ OBTER AS INFORMAÇÕES DA GUILD
        // RETORNA PARA A ROTA
    }

    addPlayer(player){
        
    }
}

module.exports = Guild;