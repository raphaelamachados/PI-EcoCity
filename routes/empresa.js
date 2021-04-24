const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const empresaController = require("../controllers/empresaController")
const parceiroController = require("../controllers/parceiroController")

// const authMiddleware = require("../middlewares/auth")
const empresaMiddleware = require("../middlewares/empresa")
const uploads = require("../configs/uploads")


router.get('/loginEmpresa',  authController.showempresa)
router.post('/loginEmpresa',  authController.loginempresa)
router.get('/cadastroEmpresa', empresaController.criarcadastro)
router.post('/cadastroEmpresa', uploads.single("foto"), empresaController.salvarcadastro)

router.use(empresaMiddleware) 
router.get('/perfilEmpresa', empresaController.create)
router.post('/perfilEmpresa', empresaController.store)

router.get('/logout',  authController.logout)

module.exports = router;