const { Usuario, Empresa_Coletora } = require("../models/")
const Bcrypt = require("bcrypt")

const authController = {
    show: (_req, res) => res.render("loginUsuario"),
    loginUsuario: async (req, res) => {
        const { email, password } = req.body

        const usuario = await Usuario.findOne({ 
            where: { 
                email,
            },
        })
        if (!usuario) {
            return res.send("Usuário ou senha inválidos")
        }
        if (!Bcrypt.compareSync(password, usuario.senha)) {
            return res.send("Usuário ou senha inválidos")
        }

        if (usuario.email == "adm@adm.com"){
            return res.redirect("/perfilAdm")
        }

        req.session.user = {
            id: usuario.id,
            nome: usuario.nome,
        }

        return res.redirect("/perfilUsuario")

    },
    showEmpresa: (_req, res) => res.render("loginEmpresa"),
    loginEmpresa: async (req, res) => {
        const { email, password } = req.body

        const empresa = await Empresa_Coletora.findOne({ 
            where: { 
                email,
            },
        })
        if (!empresa) {
            return res.send("Usuário ou senha inválidos")
        }
        if (!Bcrypt.compareSync(password, empresa.senha)) {
            return res.send("Usuário ou senha inválidos")
        }

        // if (empresa.email == "adm@adm.com"){
        //     return res.redirect("/perfilAdm")
        // }

        req.session.user = {
            id: empresa.id,
            nome: empresa.nome,
        }

        return res.redirect("/perfilEmpresa")

    },
    logout: (req,res) => {
        delete req.session.user
        delete res.locals.user

        return res.redirect('/')
    },
}

module.exports = authController