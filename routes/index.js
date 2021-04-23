const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const empresaController = require("../controllers/empresaController")
const parceiroController = require("../controllers/parceiroController")

const uploads = require("../configs/uploads")

router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)

router.get('/loginUsuario', authController.show)
router.post('/loginUsuario', authController.loginusuario)
// router.get('/loginEmpresa',  authController.showempresa)
// router.post('/loginEmpresa',  authController.loginempresa)
const authMiddleware = require("../middlewares/auth")
router.get('/logout',  authController.logout)



router.get('/perfilUsuario', authMiddleware, pagesController.perfilusuario)
router.get('/perfilUsuario/historico', pagesController.historicousuario)

router.get('/cadastroUsuario', userController.criarcadastro)
router.post('/cadastroUsuario', uploads.single("foto"), userController.salvarcadastro)



// router.get('/perfilEmpresa', authMiddleware, empresaController.create)
// router.post('/perfilEmpresa', authMiddleware, empresaController.store)

// router.get('/cadastroEmpresa', empresaController.criarcadastro)
// router.post('/cadastroEmpresa', uploads.single("foto"), empresaController.salvarcadastro)







module.exports = router;