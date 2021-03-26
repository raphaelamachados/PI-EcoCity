const { Usuario } = require("../models/")
const Bcrypt = require("bcrypt")

const authController = {
    create: (_req, res) => res.render("login"),
    store: async (req, res) => {
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

        if (usuario.email == "admin@admin.com"){
            return res.redirect("/adm")
        }

        req.session.user = {
            id: usuario.id,
            nome: usuario.nome,
        }

return res.redirect("/perfilUsuario")

    },
}

module.exports = authController