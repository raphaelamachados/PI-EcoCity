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
router.get('/perfilUsuario', authMiddleware, pagesController.perfilUsuario)

router.get('/menu', pagesController.menu)

router.get('/perfilAdm', pagesController.perfilAdm)
router.get('/perfilAdm/adm',  pagesController.listarForm)

router.get('/perfilAdm/adm/:id/editar',  pagesController.alterarForm)
router.put('/editar',  pagesController.editarForm)

router.delete('/perfilAdm/adm/deletar/:id',  pagesController.deletarForm)
router.get('/perfilAdm/cadastroParceiro',  pagesController.cadastroParceiro)

router.get('/login', authController.create)
router.post('/login', authController.store)


router.get('/cadastro', userController.create)
router.post('/cadastro', uploads.single("foto"), userController.store)

router.get('/perfilEmpresa', empresaController.create)
router.post('/perfilEmpresa', empresaController.store)

module.exports = router;