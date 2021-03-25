const {Item, Usuario, Material, Pedido} = require('../models')
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
    const pedido = await Pedido.create({
      usuario_id: idCliente
    })
    const item = await Item.create({
      material_id: material,
      peso: peso,
      pedido_id: pedido.id,
      

    })
    const tabelaMaterial = await Material.findByPk(material) 
    const tabelaUsuario = await Usuario.findByPk(idCliente) 
    const pontos = tabelaMaterial.pontos_por_peso * peso
    const usuario = await Usuario.update({
      pontuacao: tabelaUsuario.pontuacao + pontos
      
    }, {
      where: {
        id: idCliente
      }
    }) 



    if(!item){
      return res.send('Houve um erro ao cadastrar o pedido')
    }
    return res.redirect('/perfilEmpresa')
    console.log(item)
  },
};

module.exports = empresaController;
