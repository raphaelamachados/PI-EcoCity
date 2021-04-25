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
    listarvoucher: async(req, res) => {
      const { idParceiro } = req.body
        const parceiros = await Empresa_Parceira.findOne(idParceiro)
      
    console.log(parceiros)
        const vouchers = await Voucher.findAll(
        //   {
        //     where: {
        //         empresa_parceira_id:idParceiro,
        //     },
        // }
        ).then(function(vouchers){
          return res.render("listarVoucher", {vouchers, parceiros})
      })
      },

  
    
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