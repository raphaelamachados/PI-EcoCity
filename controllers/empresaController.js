const {Item, Usuario, Material} = require('../models')
const fs = require('fs')
const empresaController = {
 
  create: async (req, res) => {

    // recebendo o cpf do front para ligar com o ID do cliente que está no banco de dados 
    const {cpf} = req.query
    let usuario 
    if(cpf){
      usuario = await Usuario.findOne({ 
        where: {
          cpf: cpf,
        }
      })
  
    }
    // buscanco o material do banco de dados para e exportando para o front para apresentar no cadastro de pedido no furmulário
    const materiais = await Material.findAll()
    res.render("perfilEmpresa", {materiais, usuario})

  },

  store: async (req, res) => {
    const {idCliente, material, peso, } = req.body

    const item = await Item.create({
      material_id: material,
      peso: peso,
      id: idCliente,

    })

    if(!item){
      return res.send('Houve um erro ao cadastrar o pedido')
    }
    return res.redirect('/perfilEmpresa')
    console.log(item)
  },
};

module.exports = empresaController;
