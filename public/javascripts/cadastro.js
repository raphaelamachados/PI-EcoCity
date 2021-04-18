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


    // mascaras para cpf, cnpj, cep 
   
$("#cep").mask("99999-999");

$("#cpf").mask("999.999.999-99");

// $("#cnpj").mask("99.999.999/9999-99");
