const {Item, Usuario, Material} = require('../models')
const fs = require('fs')
const empresaController = {
  index: async(_req, res) => {
    return res.render("perfilEmpresa")
    // const pedidos = await Pedido.findAll({
    //   include:[ 
    //     {
    //     model: Foto,
    //     required: true,
    //   },
    //   {
    //     model: Usuario,
    //     required: true,
    //   },
    //   ],
    //   order: [["created_at", "DESC"]]
    // })

    // const pedidosFormatados = pedidos.map((pedido) => {
    //   const data = new Date(pedido.created_at);
    //   const dataformatada = new Intl.DateTimeFormat("pt-BR", {
    //     dateStyle: "medium",
    //     timeStyle: "short",
    //   }).format(data);

    //   return { ...pedido, created_at: dataformatada };
    // });
       

    // return res.render("index", {pedidos: pedidosFormatados});
  },
  create: async (req, res) => {

    const {cpf} = req.query

    let usuario 

    if(cpf){
      usuario = await Usuario.findOne({ 
        where: {
          cpf: cpf,
        }
      })
  
    }
    
    const materiais = await Material.findAll()
    res.render("perfilEmpresa", {materiais, usuario})
    
  },
  store: async (req, res) => {
    const { cpf, material, peso, } = req.body

    
   
    const item = await Item.create({
      pedido: material,
      peso: peso,
      

    })


    if(!item){
      return res.send('Houve um erro ao cadastrar o pedido')
    }
      return res.redirect('/perfilEmpresa')
  },
};

module.exports = empresaController;
