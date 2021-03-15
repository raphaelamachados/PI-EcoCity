const { Usuario } = require('../models')
const Bcrypt = require('bcrypt')

const userController = {
    create: (_req, res) => res.render("cadastro"),
    store: async(req,res) => {
        const {file } = req
        console.log(file)
        const { name, username, email, password, } = req.body
        
        const usuario = await Usuario.create({
            nome: name,
            username: username,
            email: email,
            senha: Bcrypt.hashSync(password, 10),
        })
    if (!usuario) {
        return res.send("houve um erro ao salvar o usuario")
    }
 
    return res.redirect("/login")
    },
}

module.exports = userController