// document.getElementById("peso").addEventListener("change", function(){
//     this.value = parseFloat(this.value).toFixed(2);
//  });
const formSalvarPedido =  document.querySelector('#form-empresa')
 function cadPedido(idCliente, materialId, peso, materialNome, ) {
    var tb = document.getElementById("tableshow");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);
    const buttonExcluir = document.createElement("button");
    buttonExcluir.setAttribute("class", "btn btn-danger ");
    buttonExcluir.textContent = "Excluir";
    // var buttonEnviar = document.getElementById("enviar")
    
    var cellId  = linha.insertCell(0);
  
    var cellIdCliente  = linha.insertCell(1);
    var cellMaterial  = linha.insertCell(2);
    var cellPeso  = linha.insertCell(3);
    
    tb.lastElementChild.appendChild(buttonExcluir);
    
    cellId.innerHTML = qtdLinhas+1;
    cellIdCliente.innerHTML = idCliente;

  //  alem da celula que é visualizada pelo cliente(cellMAterial) também é criado e enviado um input para o front (listMateriais)
    cellMaterial.innerHTML = materialNome;
    const listMateriais = document.createElement('input')
    listMateriais.setAttribute('name', 'listMateriais')
    listMateriais.value = materialId
    listMateriais.setAttribute('hidden', true)
    formSalvarPedido.appendChild(listMateriais)

  //  alem da celula que é visualizada pelo cliente(cellPeso) também é criado e enviado um input para o front (listPeso)
    cellPeso.innerHTML = peso;
    const listPeso = document.createElement('input')
    listPeso.setAttribute('name', 'listPeso')
    listPeso.value = peso
    listPeso.setAttribute('hidden', true)
    formSalvarPedido.appendChild(listPeso)
    

    buttonExcluir.addEventListener("click", () => {
        linha.remove();
    })

  };