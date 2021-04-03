const { Usuario, Empresa_Coletora } = require('../models')
const Bcrypt = require('bcrypt')
const fs = require('fs')
// const swal = require('sweetalert') 



const userController = {
    create: async (_req, res) => {
        res.render("cadastro")
    },
   
    store: async(req,res) => {
        const {file } = req
        if (req.body.tipoEmpresa == 'false'){

            const { name, cpf, email, password, } = req.body
            if (Usuario.findOne({
                where: {
                    email: email,
                }
            })) 
            {
                   
                   return res.render('cadastro', {error:"Usuário já cadastrado"})
            }
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

                return res.redirect("/login")


    }else if
    
        (req.body.tipoEmpresa == 'true'){
        
        const { nameEmpresa, cnpj, emailEmpresa, passwordEmpresa, cep } = req.body
            
        const empresa = await Empresa_Coletora.create({
            nome: nameEmpresa,
            cnpj: cnpj,
            cep: cep,
            email: emailEmpresa,
            senha: Bcrypt.hashSync(passwordEmpresa, 10),
            imagem: file.filename, 

        })

        if(!empresa) {
            fs.unlinkSync(file.path)
            return res.send("houve um erro ao salvar o usuario")
        } 

        return res.redirect("/loginEmpresa")
    }
    },
}

module.exports = userController