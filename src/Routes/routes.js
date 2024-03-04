const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const guildController = require('../Controllers/guildController');
const playerController = require('../Controllers/playerController');

const { verifyRegister, verifyLogin } = require("../Middlewares/UserMiddleware");

// user routes
router.post('/auth/register', verifyRegister, userController.register);
router.post('/auth/login', verifyLogin, userController.login);

// guild routes
router.post('/guild', guildController.setGuild);
router.get('/guild', guildController.getGuild);
router.put('/guild/addplayer', guildController.addPlayer);

// player routes
router.post('/player', playerController.setPlayer);
router.get('/player', playerController.getPlayer);
router.get('/player/guild', playerController.getGuild);

module.exports = router;