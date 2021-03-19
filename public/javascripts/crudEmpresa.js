// document.getElementById("peso").addEventListener("change", function(){
//     this.value = parseFloat(this.value).toFixed(2);
//  });

 function cadPedido(cpf, material, peso, Status) {
    var tb = document.getElementById("tableshow");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellId  = linha.insertCell(0);
    var cellCpf  = linha.insertCell(1);
    var cellMaterial  = linha.insertCell(2);
    var cellPeso  = linha.insertCell(3);
    var cellStatus  = linha.insertCell(4);

    cellId.innerHTML = qtdLinhas;
    cellCpf.innerHTML = cpf;
    cellMaterial.innerHTML = material;
    cellPeso.innerHTML = peso;
    cellStatus.innerHTML = Status;
 };
 console.log(cadPedido)