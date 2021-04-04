const { Usuario, Empresa_Coletora } = require('../models')
const Bcrypt = require('bcrypt')
const fs = require('fs')


const userController = {
    criarCadastro: async (_req, res) => {
        res.render("cadastroUsuario")
    },
   
    salvarCadastro: async(req,res) => {
        const {file } = req
        const { name, cpf, email, password, } = req.body

        // if (Usuario.findAll({
        //     where: {
        //         email: email,
        //     }
        // })) 
        // {
        //        return res.send("email já cadastrado")
        //     //    return res.render('cadastro', {error:"Usuário já cadastrado"})
        // }
        const usuario = await Usuario.create({
            nome: name,
            cpf: cpf,
            email: email,
            senha: Bcrypt.hashSync(password, 10),
            imagem: file.filename, 
        })


        if(!usuario) {
            fs.unlinkSync(file.path)
            return res.send("houve um erro ao salvar o usuario")
        } 

        return res.redirect("/loginUsuario")
    
    },
}

module.exports = userController