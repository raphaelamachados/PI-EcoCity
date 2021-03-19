const {Pedido, Usuario} = require('../models')
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
  create: (req, res) => {
    res.render("perfilEmpresa")
  },
  store: async (req, res) => {
    // const {file } = req
    const { cpf, material, peso, } = req.body
    const pedido = await Pedido.create({
       cpf: cpf,
       material: material,
       peso: peso,
    })
    if(!pedido){
      return res.send('Houve um erro ao cadastrar o pedido')
    }
      return res.redirect('/')
  },
};

module.exports = empresaController;
