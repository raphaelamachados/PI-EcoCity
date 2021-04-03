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

// router.get('/menu', pagesController.menu)

router.get('/perfilAdm', pagesController.perfilAdm)
router.get('/perfilAdm/admFiltroUsuario',  pagesController.listarUsuario)
router.get('/perfilAdm/admFiltroEmpresa',  empresaController.listarEmpresa)
router.get('/perfilAdm/admFiltroParceiro',  parceiroController.listarParceiro)


router.get('/perfilAdm/admFiltroUsuario/:id/admEditarUsuario', pagesController.alterarForm)
router.put('/perfilAdm/admFiltroUsuario/:id/admEditarUsuario',  pagesController.editarForm)
router.delete('/perfilAdm/admFiltroUsuario/deletar/:id', pagesController.deletarForm)

router.get('/perfilAdm/admFiltroEmpresa/:id/admEditarEmpresa', empresaController.alterarForm)
router.put('/perfilAdm/admFiltroEmpresa/:id/admEditarEmpresa',  empresaController.editarForm)
router.delete('/perfilAdm/admFiltroEmpresa/deletar/:id', empresaController.deletarForm)

router.get('/perfilAdm/admFiltroParceiro/:id/admEditarParceiro', parceiroController.alterarForm)
router.put('/perfilAdm/admFiltroParceiro/:id/admEditarParceiro',  parceiroController.editarForm)
router.delete('/perfilAdm/admFiltroParceiro/deletar/:id', parceiroController.deletarForm)

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