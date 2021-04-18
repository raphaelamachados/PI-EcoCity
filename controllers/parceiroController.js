const { Empresa_Parceira } = require('../models')
// const Bcrypt = require('bcrypt')
const fs = require('fs')

const parceiroController = {
    create: async (_req, res) => {
        res.render("cadastroParceiro")
    },
    store: async(req,res) => {
        const {file } = req
        const { name, cnpj,  } = req.body
        
        const parceiro = await Empresa_Parceira.create({
            nome: name,
            cnpj: cnpj,
            imagem: file.filename, 
        })
    if(!parceiro) {
        fs.unlinkSync(file.path)
        return res.render("perfilAdm", {error: "Houve um erro ao salvar a empresa parceira"})
        // return res.send("houve um erro ao salvar a empresa parceira")
    }
        return res.render("perfilAdm", {success: "Parceiro Cadastrado"})
        // return res.redirect("/perfilAdm")
    },
    listarparceiro: async(_req, res) => {
    
        const parceiros = await Empresa_Parceira.findAll().then(function(parceiros){
          return res.render("admFiltroParceiro", {parceiros})
      })
      },
      alterarform: async(req, res) => {
        let{id} = req.params
        const parceiro = await Empresa_Parceira.findByPk(id)
    
       return res.render ('admEditarParceiro', {parceiro})
    },
    
      editarform: async (req, res) => {
          const {id} = req. params
          const { name, email, cnpj } = req.body
    
        const parceiro =  await Empresa_Parceira.update({
              nome: name,
              id:id,
              cnpj: cnpj,
          }, {
            where: {
              id:id
            }
          }) 
        
            return res.render("perfilAdm", {success: "Parceiro editado com sucesso"})                            
            // return res.render("admFiltroParceiro", {success: "Parceiro editado com sucesso"})                            
      },
    
      deletarform: async (req, res) => {
          const { id } = req.params
    
          const parceiroDeletado = await Empresa_Parceira.destroy({
            where: { id },
          })
    
          if (!parceiroDeletado) {
            // return res.json({ message: 'Erro ao deletar parceiro' })
            return res.render( "admFiltroParceiro", {error: "Erro ao deletar parceiro"})
          }
            // return res.render( "admFiltroParceiro", {success: "Parceiro deletado com Sucesso"})
            return res.render("perfilAdm", {success: "Parceiro deletado com sucesso"})    
        },
}

module.exports = parceiroController