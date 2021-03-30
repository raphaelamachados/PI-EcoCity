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
let submitEmpresa = select('.submitEmpresa')
let inputEmpresa = document.createElement('input')
inputEmpresa.setAttribute('type', 'text')
inputEmpresa.setAttribute('name', 'cadastroEmpresa')

btCliente.addEventListener('click', () => {
  if (!btCliente.classList.contains('darkMode')) {
    btCliente.classList.toggle('darkMode')
    btEmpresa.classList.toggle('darkMode')
    formEmpresa.hidden = true
    formCliente.hidden = false
    formEmpresa.removeChild(inputEmpresa)
  }
})

btEmpresa.addEventListener('click', () => {
  if (!btEmpresa.classList.contains('darkMode')) {
    btEmpresa.classList.toggle('darkMode')
    btCliente.classList.toggle('darkMode')
    formCliente.hidden = true
    formEmpresa.hidden = false
    formEmpresa.insertBefore(inputEmpresa, submitEmpresa)
  }
})

    $(function(){
        $('#fupload').change(function(){
            const file = $(this)[0]. files[0];
            const fileReader = new FileReader();
            fileReader.onloadend = function(){
                $('#imgUpload').attr('src', fileReader.result)
            }
            fileReader.readAsDataURL(file)
        })
    })
