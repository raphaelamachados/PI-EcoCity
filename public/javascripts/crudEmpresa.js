// document.getElementById("peso").addEventListener("change", function(){
//     this.value = parseFloat(this.value).toFixed(2);
//  });

 function cadPedido(idCliente, material, peso, editar, deletar) {
    var tb = document.getElementById("tableshow");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellId  = linha.insertCell(0);
    var cellIdCliente  = linha.insertCell(1);
    var cellMaterial  = linha.insertCell(2);
    var cellPeso  = linha.insertCell(3);
   //  var cellEditar  = linha.insertCell(4);
   //  var cellDeletar  = linha.insertCell(4);

    cellId.innerHTML = qtdLinhas;
    cellIdCliente.innerHTML = idCliente;
    cellMaterial.innerHTML = material;
    cellPeso.innerHTML = peso;
   //  cellEditar.innerHTML = editar;
   //  cellDeletar.innerHTML = deletar;
 };
//  console.log(cadPedido)