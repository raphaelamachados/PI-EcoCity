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
}

module.exports = parceiroController