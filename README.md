# RODAR API LOCALMENTE

1 - Clonar o projeto: git clone https://github.com/devMRNGN/bdo-random-teams-api.git
2 - Baixar as dependencias: npm install
3 - Iniciar a API: node api.js
4 - Utilizar a api, rota padrão: http://localhost:8080/

# ROTAS:

## USER

### registrar usuário: http://localhost:8080/auth/register (POST)

payload: 
{
	"username": "testeJWT",
	"password": "testeJWT",
	"email": "teste.jwt@gmail.com"
}

response: 
{
	"message": "success_user_registered",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxLCJiIjoyLCJjIjozLCJpYXQiOjE3MDk1ODEwMzJ9.e4kjr0XeiP-GN0OaH-f8Vu3YMhFSlrmCDa0XANQEeh4",
	"data": {
		"createdUser": {
			"username": "testeJWT",
			"password": "$2b$10$Fp70rSbXr1s3.X3kI1z8keTV2gH7WDzwFRk4nEGMVWwInN2/5.akC",
			"email": "teste.jwt@gmail.com",
			"_id": "65e622e83b563c8e2dd21117",
			"__v": 0
		}
	}
}

### autenticar usuário: http://localhost:8080/auth/login (POST)

payload: 
{
	"username": "testeJWT",
	"password": "testeJWT"
}

response: 
{
	"message": "success_login",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxLCJiIjoyLCJjIjozLCJpYXQiOjE3MDk1ODEwNTN9.fM03FHBmQfB00GZZejVdxoCTnNKQ1tYXgFdlxM85CRk"
}

## PLAYER

### criar player: http://localhost:8080/player (POST)

payload: 
{
	"user": "65e3c7e54a02411922e5d6fe",
	"family": "JAMALMURRAY",
	"classe": "Guardian",
	"level": 63,
	"gearScore": 680
}

response:
{
	"message": "success_player_created",
	"data": {
		"playerCreated": {
			"user": "65e3c7e54a02411922e5d6fe",
			"family": "JAMALMURRAY",
			"classe": "Guardian",
			"level": 63,
			"gearScore": 680,
			"guild": [],
			"_id": "65e4b5397ccd53caef2f1e50",
			"__v": 0
		}
	}
}

### obter player: http://localhost:8080/player (GET)

payload:
{
	"family": "MARANGONI"
}

response:
{
	"message": "success_player_finded",
	"data": {
		"player": {
			"_id": "65e4b0df5f05c5730630f4bb",
			"user": "65e3c7e54a02411922e5d6fe",
			"family": "MARANGONI",
			"classe": "Guardian",
			"level": 63,
			"gearScore": 680,
			"guild": [],
			"__v": 0
		}
	}
}

### obter guild do player: http://localhost:8080/player/guild (GET)

payload:
{
	"family": "MARANGONI"
}

response:
{
	"message": "success_player_guild_finded",
	"data": {
		"guild": {
			"_id": "65e4b3d760f4a97fba3a62b1",
			"name": "SuperNova",
			"image": "URLEXAMPLE",
			"leader": "65e3c7e54a02411922e5d6fe",
			"size": "Extra grande",
			"players": [
				"65e4b0df5f05c5730630f4bb"
			],
			"__v": 0
		}
	}
}

## GUILD

### criar guild: http://localhost:8080/guild (POST)

payload:
{
	"name": "SuperNova",
	"image": "URLEXAMPLE",
	"leader": "65e3c7e54a02411922e5d6fe",
	"size": "Extra grande",
	"players": ["65e4b0df5f05c5730630f4bb"]
}

response:
{
	"message": "success_guild_created",
	"data": {
		"guildCreated": {
			"name": "SuperNova",
			"image": "URLEXAMPLE",
			"leader": "65e3c7e54a02411922e5d6fe",
			"size": "Extra grande",
			"players": [
				"65e4b0df5f05c5730630f4bb"
			],
			"_id": "65e4b3d760f4a97fba3a62b1",
			"__v": 0
		}
	}
}

### obter guild: http://localhost:8080/guild (GET)

payload:
{
	"guildName": "SuperNova"
}

response:
{
	"message": "success_guild_finded",
	"data": {
		"guild": {
			"_id": "65e4b3d760f4a97fba3a62b1",
			"name": "SuperNova",
			"image": "URLEXAMPLE",
			"leader": "65e3c7e54a02411922e5d6fe",
			"size": "Extra grande",
			"players": [
				"65e4b0df5f05c5730630f4bb"
			],
			"__v": 0
		}
	}
}

### adicionar player na guild: http://localhost:8080/guild/addplayer (PUT)

payload:
{
	"familyPlayerName": "JAMALMURRAY",
	"guildName": "SuperNova"
}

response:
{
	"message": "success_player_added",
	"data": {
		"guild": {
			"_id": "65e4b3d760f4a97fba3a62b1",
			"name": "SuperNova",
			"image": "URLEXAMPLE",
			"leader": "65e3c7e54a02411922e5d6fe",
			"size": "Extra grande",
			"players": [
				"65e4b0df5f05c5730630f4bb",
				"65e4b0df5f05c5730630f4bb",
				"65e4b5397ccd53caef2f1e50"
			],
			"__v": 2
		}
	}
}
