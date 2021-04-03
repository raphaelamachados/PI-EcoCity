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
        return res.send("houve um erro ao salvar a empresa parceira")
    }
 
        return res.redirect("/perfilAdm")
    },
    listarParceiro: async(_req, res) => {
    
        const parceiros = await Empresa_Parceira.findAll().then(function(parceiros){
          return res.render("admFiltroParceiro", {parceiros})
      })
      },
      alterarForm: async(req, res) => {
        let{id} = req.params
        const parceiro = await Empresa_Parceira.findByPk(id)
    
       return res.render ('admEditarParceiro', {parceiro})
    },
    
      editarForm: async (req, res) => {
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
          return res.redirect("/perfilAdm/admFiltroParceiro")
      },
    
      deletarForm: async (req, res) => {
          const { id } = req.params
    
          const parceiroDeletado = await Empresa_Parceira.destroy({
            where: { id },
          })
    
          if (!parceiroDeletado) {
            return res.json({ message: 'Erro ao deletar parceiro' })
          }
    
          return res.json({ message: 'Parceiro deletado com sucesso!' })
        },
}

module.exports = parceiroController