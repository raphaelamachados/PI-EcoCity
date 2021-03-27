
// window.addEventListener('load', function() {

//     let links = document.querySelectorAll('.button')
    
    
//       for(let link of links) {
//         link.addEventListener("click", function(){
//         this.classList.toggle("darkMode")
//        })
//       }
    
//     })


    
// window.addEventListener('load', function() {

//     let btCliente = document.querySelector('.button.cliente')
//     let btEmpresa = document.querySelector('.button.empresa')
//     let formCliente = document.querySelector('.form-input.cliente')
//     let formEmpresa = document.querySelector('.form-input.cliente')
//     // let formEmpresa = document.querySelector('.form-input-empresa')

    
      
//         btCliente.addEventListener("click", function(){
//         btnCliente.classList.toggle("darkMode")
//         formCliente.classList.toggle("hidden")
//       })
 
// }

function select (query) {
    return document.querySelector(query)
  }
  
//   document.querySelector('form-input-cliente').style.visibility
  
  window.addEventListener('load', () => {
    let btCliente = select('.cliente')
    let btEmpresa = select('.empresa')
    let formCliente = select('.form-input-cliente')
    let formEmpresa = select('.form-input-empresa')
  
    btCliente.addEventListener('click', ()=>{
      this.classList.toggle('darkMode')
      btEmpresa.classList.toggle('DarkMode')
      formCliente.style.visibility = 'visible'
      formEmpresa.style.visibility = 'hidden'
    })
  
    btEmpresa.addEventListener('click', ()=>{
      this.classList.toggle('darkMode')
      btCliente.classList.toggle('DarkMode')
      formCliente.style.visibility = 'hidden'
      formEmpresa.style.visibility = 'visible'
    })
  })