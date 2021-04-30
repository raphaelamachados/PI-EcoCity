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
        const {id} = req.params
        
        const parceiro = await Empresa_Parceira.findByPk(id)
      
      try {
        
        const vouchers = await Voucher.findAll(
          {

            where: {
                empresa_parceira_id:id,
            },
        })
          return res.render("listarVoucher", {vouchers, parceiro})
      
      } catch (error) {
        console.log(error)
      }
       
      },
      efetuartroca: async(req, res) => {
        const { id } = req.session.user
        const { idVoucher, idParceiro} = req.body
        const usuario =  await Usuario.findByPk(id)
        const voucher =  await Voucher.findByPk(idVoucher)
        const parceiro =  await Empresa_Parceira.findByPk(idParceiro) 
        const cupom =   Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        
        const vouchers = await Voucher.findAll(
          {

            where: {
                empresa_parceira_id:idParceiro,
            },
        })

        if(usuario.pontuacao < voucher.pontos_troca){
        
          return res.render("listarVoucher", {error: "Você não possui pontos suficientes para a troca", parceiro, vouchers})   
        
        }
        const pontosRestantes = usuario.pontuacao - voucher.pontos_troca

        const pontosAtualizados =  await Usuario.update(
          {
            pontuacao: pontosRestantes,
          }, 
          {
          where: {
            id:id
          },
        }) 
        // não se se é correto passar pontos atualizados
        return res.render("listarVoucher",{user: req.session.user, parceiro:parceiro, vouchers, success: `Troca realizada com sucesso. Seu cupom é : ${cupom}`, })   
      },
}

module.exports = voucherController