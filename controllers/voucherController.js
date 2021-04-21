const { Empresa_Parceira, Voucher, Usuario } = require('../models')
// const Bcrypt = require('bcrypt')
const fs = require('fs')

const voucherController = {
    index: (_req, res) => {
      return res.render("cadastroVoucher")
  },
    create: async(req,res) => {
        const { codigo, descricao, pontosTroca, idParceiro  } = req.body
        
        const vouchers = await Voucher.create({
            codigo: codigo,
            descricao: descricao,
            pontos_troca: pontosTroca,
            empresa_parceira_id: idParceiro,
        })
    if(!vouchers) {
        return res.send("houve um erro ao salvar Voucher")
    }
      return res.render("perfilAdm", {success: "Voucher Cadastrado"})
    },
    listarvoucher: async(_req, res) => {
    
        const vouchers = await Voucher.findAll().then(function(vouchers){
          return res.render("listarVoucher", {vouchers})
      })
      },

    //   alterarform: async(req, res) => {
    //     let{id} = req.params
    //     const voucher = await Voucher.findByPk(id)
    
    //    return res.render ('editarVoucher', {voucher})
    // },
    
      // editarform: async (req, res) => {
      //     const {id} = req. params
      //     const { name, email, cnpj } = req.body
    
      //   const voucher =  await voucher.update({
      //         nome: name,
      //         id:id,
      //         cnpj: cnpj,
      //     }, {
      //       where: {
      //         id:id
      //       }
      //     }) 
      //     return res.redirect("/perfilAdm/admFiltroParceiro")
      // },
    
      deletarform: async (req, res) => {
          const { id } = req.params
    
          const voucherDeletado = await Voucher.destroy({
            where: { id },
          })

         
        
        if (!voucherDeletado) {
          return res.json({ message: 'Erro ao deletar voucher' })
          // return res.render( "admFiltroParceiro", {error: "Erro ao deletar parceiro"})
        }
        
        // return res.json({ message: 'Voucher deletado com sucesso!' })
        return res.render("perfilAdm", {success: "Voucher deletado com sucesso"})    
        },
}

module.exports = voucherController