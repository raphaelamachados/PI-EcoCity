const { Usuario, Pedido, Item, Empresa_Coletora, Material } = require('../models')
const pagesController = {
    index: (_req, res) => {
       return res.render("index")
    },
    // login: (req,res) => {
    //     return res.render("login")
    // },
    // cadastro: (req,res) => {
    //     return res.render("cadastro")
    // },
    coleta: (_req,res) => {
        return res.render("coleta")
    },
    sobrenos: (_req,res) => {
        return res.render("sobrenos")
    },
    perfilUsuario: async(req,res) => {
        const { id } = req.session.user
        const usuario = await Usuario.findByPk(id)
      
        // console.log(usuario)
        return res.render("perfilUsuario", {usuario})
    },

    historicoUsuario: async (req,res) => {
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
    perfilAdm: (_req,res) => {
        return res.render("perfilAdm")
    },

    listarForm:  async (_req,res) => {
        
        const usuarios = await Usuario.findAll().then(function(usuarios){
            return res.render("adm", {usuarios})
        })
        
        // function listarEmpresa(){
        //     const empresas = Empresa_Coletora.findAll().then(function(empresas){
        //         return res.render("adm", {empresas})
        //     })
        // }
        // function listarParceiro(){
        //     const parceiros = Empresa_Parceira.findAll().then(function(parceiros){
        //         return res.render("adm", {parceiros})
        //     })
        // }
        
        // listarEmpresa()
        // ListarParceiro()
    },
    alterarForm: async(req, res) => {
        let{id} = req.params
        const usuario = await Usuario.findByPk(id)

       return res.render ('admEditar', {usuario})
    },

    editarForm: async (req, res) => {
        const {id} = req. params
        const { name, email, } = req.body

      const usuario =  await Usuario.update({
            nome: name,
            id:id,
            email: email,
        }, {
          where: {
            id:id
          }
        }) 
        console.log(usuario)
        return res.redirect("/perfilAdm/adm")
    },
    deletarForm: async (req, res) => {
        const { id } = req.params
    
        const usuarioDeletado = await Usuario.destroy({
          where: { id },
        })
    
        if (!usuarioDeletado) {
          return res.json({ message: 'Erro ao deletar usuário' })
        }
    
        return res.json({ message: 'Usuário deletado com sucesso!' })
      },

    menu: (_req,res) => {
        return res.render("menu")
    },
    // cadastroParceiro: (_req,res) => {
    //     return res.render("cadastroParceiro")
    // },
}
module.exports = pagesController