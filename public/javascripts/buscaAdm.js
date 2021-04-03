const pesquisaUsuario = document.querySelector('#pesquisaUsuario')
const pesquisaEmpresa = document.querySelector('#pesquisaEmpresa')
const pesquisaParceiro = document.querySelector('#pesquisaParceiro')
const tbodyUsuario = document.querySelector('#tbodyUsuario')
const tbodyEmpresa = document.querySelector('#tbodyEmpresa')
const tbodyParceiro = document.querySelector('#tbodyEmpresa')
const inputUsuario = document.querySelector('#inputUsuario')
const inputEmpresa = document.querySelector('#inputEmpresa')
const inputParceiro = document.querySelector('#inputParceiro')


window.addEventListener("load", () => {
    const usuarios = await Usuario.findAll()
    tbodyEmpresa.hidden = true
    tbodyParceiro.hidden = true
})


pesquisaUsuario.addEventListener("click", () =>{
        inputUsuario.setAttribute('value', 'true')
        tbodyEmpresa.hidden = true
        tbodyParceiro.hidden = true
        inputEmpresa.setAttribute('value', 'false')
        inputParceiro.setAttribute('value', 'false')
        
        const usuarios = await Usuario.findAll().then(function(usuarios){
            // return res.render("adm", {usuarios})
        })
  
})

pesquisaEmpresa.addEventListener("click", () =>{
        inputEmpresa.setAttribute('value', 'true')
        tbodyUsuario.hidden = true
        tbodyParceiro.hidden = true
        inputUsuario.setAttribute('value', 'false')
        inputParceiro.setAttribute('value', 'false')
        
        const empresas = Empresa_Coletora.findAll().then(function(empresas){
            // return res.render("adm", {empresas})
        })
})

pesquisaParceiro.addEventListener("click", () =>{
    inputParceiro.setAttribute('value', 'true')
    tbodyUsuario.hidden = true
    tbodyEmpresa.hidden = true
    inputUsuario.setAttribute('value', 'false')
    inputEmpresa.setAttribute('value', 'false')
    
    const parceiros = Empresa_Parceira.findAll().then(function(parceiros){
        // return res.render("adm", {parceiros})
    })
})
