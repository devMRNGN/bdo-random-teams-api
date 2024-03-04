const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const guildController = require('../Controllers/guildController');
const playerController = require('../Controllers/playerController');

const { verifyRegister, verifyLogin } = require("../Middlewares/UserMiddleware");
const { verifySetGuild, verifyGetGuild, verifyAddPlayer } = require("../Middlewares/GuildMiddleware");
const { verifySetPlayer, verifyGetPlayer, verifyGetPlayerGuild } = require("../Middlewares/PlayerMiddleware");

// user routes
router.post('/auth/register', verifyRegister, userController.register);
router.post('/auth/login', verifyLogin, userController.login);

// guild routes
router.post('/guild', verifySetGuild, guildController.setGuild);
router.get('/guild', verifyGetGuild, guildController.getGuild);
router.put('/guild/addplayer', verifyAddPlayer, guildController.addPlayer);

// player routes
router.post('/player', verifySetPlayer, playerController.setPlayer);
router.get('/player', verifyGetPlayer, playerController.getPlayer);
router.get('/player/guild', verifyGetPlayerGuild, playerController.getGuild);

module.exports = router;