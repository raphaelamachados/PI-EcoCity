const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")

const authMiddleware = require("../middlewares/auth")

router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)
router.get('/menu', pagesController.menu)
router.get('/quiz', pagesController.quiz)

router.get('/login', authController.create)
router.post('/login', authController.store)


router.get('/cadastro', userController.create)
router.post('/cadastro', userController.store)


router.get('/perfilUsuario', authMiddleware,  pagesController.perfilUsuario)

module.exports = router;
