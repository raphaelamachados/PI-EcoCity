const { Usuario, Empresa_Coletora } = require("../models/")
const Bcrypt = require("bcrypt")

const authController = {
    show: (_req, res) => res.render("loginUsuario"),
    loginusuario: async (req, res) => {
        const { email, password } = req.body

        const usuario = await Usuario.findOne({ 
            where: { 
                email,
            },
        })
        if (!usuario) {
            // return res.send("Usuário ou senha inválidos")
            return res.render('loginUsuario', {error:"Usuário ou senha inválidos"})
        }
        if (!Bcrypt.compareSync(password, usuario.senha)) {
            return res.render('loginUsuario', {error:"Usuário ou senha inválidos"})
        }
        
        req.session.user = {
            id: usuario.id,
            nome: usuario.nome,
            rule: usuario.rule,
        }
        if (usuario.rule == "admin"){
            return res.redirect("/perfilAdm")
        }
        return res.redirect("/perfilUsuario")

    },
    showempresa: (_req, res) => res.render("loginEmpresa"),
    loginempresa: async (req, res) => {
        const { email, password } = req.body

        const empresa = await Empresa_Coletora.findOne({ 
            where: { 
                email,
            },
        })
        if (!empresa) {
            return res.render('loginEmpresa', {error:"Usuário ou senha inválidos"})
        }
        if (!Bcrypt.compareSync(password, empresa.senha)) {
            return res.render('loginEmpresa', {error:"Usuário ou senha inválidos"})
        }

        req.session.user = {
            id: empresa.id,
            nome: empresa.nome,
            rule: empresa.rule,
        }

        return res.redirect("/empresa/perfilEmpresa")

    },
    logout: (req,res) => {
        delete req.session.user
        delete res.locals.user

        return res.redirect('/')
    },
}

module.exports = authController