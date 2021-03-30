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
    perfilUsuario: async(req,res) => {
        const { id } = req.session.user
        const usuario = await Usuario.findByPk(id)
      
        // console.log(usuario)
        return res.render("perfilUsuario", {usuario})
    },
    perfilAdm: (_req,res) => {
        return res.render("perfilAdm")
    },

    listarForm: async(_req,res) => {
        const usuarios = await Usuario.findAll().then(function(usuarios){
            return res.render("adm", {usuarios})
        })
    },
    alterarForm: async(req, res) => {
        let{id} = req.params
        const usuario = await Usuario.findByPk(id)

       return res.render ('admEditar', {usuario})
    },

    editarForm: async (req, res) => {
        const { name, email, id } = req.body

      const usuario =  await Usuario.update({
            nome: name,
            id:id,
            email: email,
        }, {
          where: {
            id:id
          }
        }) 
        console.log(usuario)
        return res.redirect("/perfilAdm/adm")
    },
    deletarForm: (req, res) => {
        const {id} = req.params
        
        // return res.render("adm")
        return res.send("estou deletando o usuario com id: " + id)
    },

    menu: (_req,res) => {
        return res.render("menu")
    },
    cadastroParceiro: (_req,res) => {
        return res.render("cadastroParceiro")
    },
}
module.exports = pagesController