const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const voucherController = require("../controllers/voucherController")
const parceiroController = require("../controllers/parceiroController")

const uploads = require("../configs/uploads")

router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)

router.get('/loginUsuario', authController.show)
router.post('/loginUsuario', authController.loginusuario)

const authMiddleware = require("../middlewares/auth")
router.get('/logout',  authController.logout)

router.get('/perfilUsuario', authMiddleware, pagesController.perfilusuario)
router.get('/perfilUsuario/historico', pagesController.historicousuario)

router.get('/cadastroUsuario', userController.criarcadastro)
router.post('/cadastroUsuario', uploads.single("foto"), userController.salvarcadastro)

router.get('/perfilUsuario/listarVoucher/:id', voucherController.listarvoucher)
router.post('/perfilUsuario/trocaVoucher', voucherController.efetuartroca)










module.exports = router;