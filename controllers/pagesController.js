const { Usuario } = require('../models')
const pagesController = {
    index: (_req, res) => {
       return res.render("index")
    },
    // login: (req,res) => {
    //     return res.render("login")
    // },
    // cadastro: (req,res) => {
    //     return res.render("cadastro")
    // },
    coleta: (_req,res) => {
        return res.render("coleta")
    },
    sobrenos: (_req,res) => {
        return res.render("sobrenos")
    },
    perfilUsuario: async(_req,res) => {
        // const { id } = req.session
        // const usuario = await Usuario.findByPk(id)
        const usuario = await Usuario.findAll({

        })
        
        console.log(usuario)
        return res.render("perfilUsuario", {usuario})
        
    },
    adm: (_req,res) => {
        return res.render("adm")
    },
    menu: (_req,res) => {
        return res.render("menu")
    },
}
module.exports = pagesController