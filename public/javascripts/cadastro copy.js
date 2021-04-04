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
let tipoEmpresa = select('#tipoEmpresa')

btCliente.addEventListener('click', () => {
  if (!btCliente.classList.contains('darkMode')) {
    btCliente.classList.toggle('darkMode')
    btEmpresa.classList.toggle('darkMode')
    formEmpresa.hidden = true
    formCliente.hidden = false
    tipoEmpresa.setAttribute('value', 'false')
  }
})

btEmpresa.addEventListener('click', () => {
  if (!btEmpresa.classList.contains('darkMode')) {
    btEmpresa.classList.toggle('darkMode')
    btCliente.classList.toggle('darkMode')
    formCliente.hidden = true
    formEmpresa.hidden = false
    tipoEmpresa.setAttribute('value', 'true')

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
