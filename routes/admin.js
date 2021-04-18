const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const empresaController = require("../controllers/empresaController")
const parceiroController = require("../controllers/parceiroController")
const voucherController = require("../controllers/voucherController")

const authMiddleware = require("../middlewares/auth")
const adminMiddleware = require("../middlewares/admin")
const uploads = require("../configs/uploads")

router.use(adminMiddleware) 
router.get('/', pagesController.perfiladm)
router.get('/admFiltroUsuario', pagesController.listarusuario)
router.get('/admFiltroEmpresa', empresaController.listarempresa)
router.get('/admFiltroParceiro', parceiroController.listarparceiro)



router.get('/admFiltroUsuario/:id/admEditarUsuario',pagesController.alterarform)
router.put('/admFiltroUsuario/:id/admEditarUsuario', pagesController.editarform)
router.delete('/admFiltroUsuario/deletar/:id', pagesController.deletarform)

router.get('/admFiltroEmpresa/:id/admEditarEmpresa', empresaController.alterarform)
router.put('/admFiltroEmpresa/:id/admEditarEmpresa', empresaController.editarform)
router.delete('/admFiltroEmpresa/deletar/:id', empresaController.deletarform)

router.get('/admFiltroParceiro/:id/admEditarParceiro', parceiroController.alterarform)
router.put('/admFiltroParceiro/:id/admEditarParceiro', parceiroController.editarform)
router.delete('/admFiltroParceiro/deletar/:id', parceiroController.deletarform)

router.get('/cadastroParceiro', parceiroController.create)
router.post('/cadastroParceiro', uploads.single("foto"), parceiroController.store)

router.get('/cadastroVoucher', voucherController.index)
router.post('/cadastroVoucher', voucherController.create)



module.exports = router;