var express = require('express');
var router = express.Router();
var pagesController = require("../controllers/pagesController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', pagesController.index)
router.get('/sobrenos', pagesController.sobrenos)
router.get('/coleta', pagesController.coleta)
router.get('/menu', pagesController.menu)
router.get('/quiz', pagesController.quiz)

router.get('/login', pagesController.login)
router.get('/cadastro', pagesController.cadastro)
router.get('/perfilUsuario', pagesController.perfilUsuario)

module.exports = router;
