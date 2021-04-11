const { Usuario, Pedido, Item, Empresa_Coletora, Empresa_Parceira, Material } = require('../models')
const pagesController = {
    index: (_req, res) => {
       return res.render("index")
    },
   
    coleta: (_req,res) => {
        return res.render("coleta")
    },
    sobrenos: (_req,res) => {
        return res.render("sobrenos")
    },
    perfilusuario: async(req,res) => {
        const { id } = req.session.user
        const usuario = await Usuario.findByPk(id)
        const parceiros = await Empresa_Parceira.findAll()
      
        return res.render("perfilUsuario", {usuario, parceiros})
    },

    historicousuario: async (req,res) => {
        // const pedidos = await Pedido.findAll().then(function(pedidos) {
        //     return res.render("historicoUsuario", {pedidos})
        // })

        const { id } = req.session.user
        const pedidos = await Pedido.findOne({
            where: {
                usuario_id: id,
            },
            include: [
            {
                model: Item,
                as: 'item',
                required: true,
            },
            {
                model: Empresa_Coletora,
                required: true,
            },
            // {
            //     model: Material,
            //     required: true,
            // },
        ],
        // order: [["created_at, "DESC"]],

        // const pedidosFormatados = pedidos.map((pedido) =>{
        //     const data = new Date(pedido.createdAt)
        //     const dataFormatada = new Intl.DateTimeFormat("pt-Br", {
                    // dateStyle: "short",
                    // timeStyle: "short",
        //     }).format(data);

        //     return { ...pedido, createdAt: dataFormatada}
        // }) 
        
        
        }).then(function(pedidos) {
            return res.render("historicoUsuario", {pedidos})//: pedidosFormatados})//
        })

    },
    perfiladm: (_req,res) => {
        return res.render("perfilAdm", )
    },

    listarusuario:  async (_req,res) => {
        
        const usuarios = await Usuario.findAll().then(function(usuarios){
            return res.render("admFiltroUsuario", {usuarios})
        })
     },
    alterarform: async(req, res) => {
        let{id} = req.params
        const usuario = await Usuario.findByPk(id)

       return res.render ('admEditarUsuario', {usuario})
    },

    editarform: async (req, res) => {
        const {id} = req. params
        const { name, email, cpf } = req.body

      const usuario =  await Usuario.update({
            nome: name,
            id:id,
            cpf: cpf,
            email: email,
        }, {
          where: {
            id:id
          }
        }) 
        console.log(usuario)
        return res.redirect("/perfilAdm/admFiltroUsuario")
    },
    deletarform: async (req, res) => {
        const { id } = req.params
    
        const usuarioDeletado = await Usuario.destroy({
          where: { id },
        })
    
        if (!usuarioDeletado) {
          return res.json({ message: 'Erro ao deletar usuário' })
        }
    
        return res.json({ message: 'Usuário deletado com sucesso!' })
      },

   
}
module.exports = pagesController