# RODAR API LOCALMENTE

1 - Clonar o projeto: git clone https://github.com/devMRNGN/bdo-random-teams-api.git <br>
2 - Baixar as dependencias: npm install <br>
3 - Iniciar a API: node api.js <br>
4 - Utilizar a api, rota padrão: http://localhost:8080/

# ROTAS:

## USER

### registrar usuário: http://localhost:8080/auth/register (POST)

payload:  <br>
{ <br>
	"username": "testeJWT", <br>
	"password": "testeJWT", <br>
	"email": "teste.jwt@gmail.com" <br>
}

response: <br>
{ <br>
	"message": "success_user_registered", <br>
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxLCJiIjoyLCJjIjozLCJpYXQiOjE3MDk1ODEwMzJ9.e4kjr0XeiP-GN0OaH-f8Vu3YMhFSlrmCDa0XANQEeh4", <br>
	"data": { <br>
		"createdUser": { <br>
			"username": "testeJWT", <br>
			"password": "$2b$10$Fp70rSbXr1s3.X3kI1z8keTV2gH7WDzwFRk4nEGMVWwInN2/5.akC", <br>
			"email": "teste.jwt@gmail.com", <br>
			"_id": "65e622e83b563c8e2dd21117", <br>
			"__v": 0 <br>
		} <br>
	} <br>
} 

### autenticar usuário: http://localhost:8080/auth/login (POST)

payload: <br>
{ <br>
	"username": "testeJWT", <br>
	"password": "testeJWT" <br>
}

response: <br>
{ <br>
	"message": "success_login", <br>
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxLCJiIjoyLCJjIjozLCJpYXQiOjE3MDk1ODEwNTN9.fM03FHBmQfB00GZZejVdxoCTnNKQ1tYXgFdlxM85CRk" <br>
}

## PLAYER

### criar player: http://localhost:8080/player (POST)

payload: <br>
{ <br>
	"user": "65e3c7e54a02411922e5d6fe", <br>
	"family": "JAMALMURRAY", <br>
	"classe": "Guardian", <br>
	"level": 63, <br>
	"gearScore": 680 <br>
}

response: <br>
{ <br>
	"message": "success_player_created", <br>
	"data": { <br>
		"playerCreated": { <br>
			"user": "65e3c7e54a02411922e5d6fe", <br>
			"family": "JAMALMURRAY", <br>
			"classe": "Guardian", <br>
			"level": 63, <br>
			"gearScore": 680, <br>
			"guild": [], <br>
			"_id": "65e4b5397ccd53caef2f1e50", <br>
			"__v": 0 <br>
		} <br>
	} <br>
}

### obter player: http://localhost:8080/player (GET)

payload: <br>
{ <br>
	"family": "MARANGONI" <br>
}

response: <br>
{ <br> 
	"message": "success_player_finded", <br>
	"data": { <br>
		"player": { <br>
			"_id": "65e4b0df5f05c5730630f4bb", <br>
			"user": "65e3c7e54a02411922e5d6fe", <br>
			"family": "MARANGONI", <br>
			"classe": "Guardian", <br>
			"level": 63, <br>
			"gearScore": 680, <br>
			"guild": [], <br>
			"__v": 0 <br>
		} <br>
	} <br>
}

### obter guild do player: http://localhost:8080/player/guild (GET)

payload: <br>
{ <br>
	"family": "MARANGONI" <br>
}

response: <br>
{ <br>
	"message": "success_player_guild_finded", <br>
	"data": { <br>
		"guild": { <br>
			"_id": "65e4b3d760f4a97fba3a62b1", <br>
			"name": "SuperNova", <br>
			"image": "URLEXAMPLE", <br>
			"leader": "65e3c7e54a02411922e5d6fe", <br>
			"size": "Extra grande", <br>
			"players": [ <br>
				"65e4b0df5f05c5730630f4bb" <br>
			], <br>
			"__v": 0 <br>
		} <br>
	} <br>
}

## GUILD

### criar guild: http://localhost:8080/guild (POST)

payload: <br>
{ <br>
	"name": "SuperNova", <br>
	"image": "URLEXAMPLE", <br>
	"leader": "65e3c7e54a02411922e5d6fe", <br>
	"size": "Extra grande", <br>
	"players": ["65e4b0df5f05c5730630f4bb"] <br>
}

response: <br>
{ <br>
	"message": "success_guild_created", <br>
	"data": { <br>
		"guildCreated": { <br>
			"name": "SuperNova", <br>
			"image": "URLEXAMPLE", <br>
			"leader": "65e3c7e54a02411922e5d6fe", <br>
			"size": "Extra grande", <br>
			"players": [ <br>
				"65e4b0df5f05c5730630f4bb" <br>
			], <br>
			"_id": "65e4b3d760f4a97fba3a62b1", <br>
			"__v": 0 <br>
		} <br>
	} <br>
}

### obter guild: http://localhost:8080/guild (GET)

payload: <br>
{ <br>
	"guildName": "SuperNova" <br>
}

response: <br>
{ <br>
	"message": "success_guild_finded", <br>
	"data": { <br>
		"guild": { <br>
			"_id": "65e4b3d760f4a97fba3a62b1", <br>
			"name": "SuperNova", <br>
			"image": "URLEXAMPLE", <br>
			"leader": "65e3c7e54a02411922e5d6fe", <br>
			"size": "Extra grande", <br>
			"players": [ <br>
				"65e4b0df5f05c5730630f4bb" <br>
			], <br>
			"__v": 0 <br>
		} <br>
	} <br>
}

### adicionar player na guild: http://localhost:8080/guild/addplayer (PUT)

payload: <br>
{ <br> 
	"familyPlayerName": "JAMALMURRAY", <br>
	"guildName": "SuperNova" <br>
}

response: <br>
{ <br>
	"message": "success_player_added", <br>
	"data": { <br>
		"guild": { <br>
			"_id": "65e4b3d760f4a97fba3a62b1", <br>
			"name": "SuperNova", <br>
			"image": "URLEXAMPLE", <br>
			"leader": "65e3c7e54a02411922e5d6fe", <br>
			"size": "Extra grande", <br>
			"players": [ <br>
				"65e4b0df5f05c5730630f4bb", <br>
				"65e4b0df5f05c5730630f4bb", <br>
				"65e4b5397ccd53caef2f1e50" <br>
			], <br>
			"__v": 2 <br>
		} <br>
	} <br>
}
