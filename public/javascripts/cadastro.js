function select(query) {
  return document.querySelector(query)
}

function byId(id) {
  return document.getElementById(id)
}

let btCliente = select('.cliente')
let btEmpresa = select('.empresa')
let formCliente = byId('f-cliente')
let formEmpresa = byId('f-empresa')

btCliente.addEventListener('click', () => {
  if (!btCliente.classList.contains('darkMode')) {
    btCliente.classList.toggle('darkMode')
    btEmpresa.classList.toggle('darkMode')
    formEmpresa.hidden = true
    formCliente.hidden = false
  }
})

btEmpresa.addEventListener('click', () => {
  if (!btEmpresa.classList.contains('darkMode')) {
    btEmpresa.classList.toggle('darkMode')
    btCliente.classList.toggle('darkMode')
    formCliente.hidden = true
    formEmpresa.hidden = false
  }
})