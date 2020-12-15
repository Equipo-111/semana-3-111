const router = require('express').Router();
const { User } = require('../../models');
const userController = require('../../controllers/MiController.js');
const bcrypt = require('bcryptjs');

//api/auth/
router.get('/', userController.listar);

//api/auth/register
router.post('/register', userController.register);

//api/auth/login
router.post('/signin', userController.signin);


module.exports = router;