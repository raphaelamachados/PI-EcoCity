const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const empresaController = require("../controllers/empresaController")
const parceiroController = require("../controllers/parceiroController")

const authMiddleware = require("../middlewares/auth")
const uploads = require("../configs/uploads")

router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)
router.get('/perfilUsuario', authMiddleware, pagesController.perfilUsuario)
router.get('/perfilUsuario/historico', authMiddleware, pagesController.historicoUsuario)

router.get('/menu', pagesController.menu)

router.get('/perfilAdm', pagesController.perfilAdm)
router.get('/perfilAdm/adm',  pagesController.listarForm)

router.get('/perfilAdm/adm/:id/editar', pagesController.alterarForm)
router.put('/perfilAdm/adm/:id/editar',  pagesController.editarForm)
router.delete('/perfilAdm/adm/deletar/:id', pagesController.deletarForm)

router.get('/perfilAdm/cadastroParceiro', parceiroController.create)
router.post('/perfilAdm/cadastroParceiro', uploads.single("foto"), parceiroController.store)

// router.get('/perfilAdm/cadastroParceiro',  pagesController.cadastroParceiro)

router.get('/login', authController.show)
router.post('/login', authController.loginUsuario)
router.get('/loginEmpresa',  authController.showEmpresa)
router.post('/loginEmpresa',  authController.loginEmpresa)


router.get('/cadastro', userController.create)
router.post('/cadastro', uploads.single("foto"), userController.store)

router.get('/perfilEmpresa', authMiddleware, empresaController.create)
router.post('/perfilEmpresa', authMiddleware, empresaController.store)

module.exports = router;