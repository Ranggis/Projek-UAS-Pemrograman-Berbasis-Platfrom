const express = require('express');
const { register, login } = require('../Controllers/authController');
const { authenticateToken } = require('../Middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;