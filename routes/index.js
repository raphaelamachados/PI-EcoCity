const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const empresaController = require("../controllers/empresaController")

const authMiddleware = require("../middlewares/auth")
const uploads = require("../configs/uploads")

router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)
<<<<<<< HEAD
router.get('/perfilUsuario', authMiddleware, pagesController.perfilUsuario)

=======
router.get('/menu', pagesController.menu)
router.get('/adm', pagesController.adm)
>>>>>>> d7816107828da5f50cdacc5f4b459a79ba54ea29

router.get('/login', authController.create)
router.post('/login', authController.store)


router.get('/cadastro', userController.create)
router.post('/cadastro', uploads.single("foto"), userController.store)

router.get('/perfilEmpresa', empresaController.create)
router.post('/perfilEmpresa', empresaController.store)

module.exports = router;
