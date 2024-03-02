const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const tokenController = require('../Middlewares/tokenController');
const guildController = require('../Controllers/guildController');
const playerController = require('../Controllers/playerController');

// user routes
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);
router.get('/auth/verify-token', tokenController.verifyToken);

// guild routes
router.post('/guild', guildController.setGuild);
router.get('/guild', guildController.getGuild);
router.put('/guild', guildController.addPlayer);

// player routes
router.post('/player', playerController.setPlayer);
router.get('/player', playerController.getPlayer);
router.get('/player/guild', playerController.getGuild);

module.exports = router;