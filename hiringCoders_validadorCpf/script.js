console.log("JavaScript");
function validar(){
    var cpf = document.getElementById("cpf_input").value;
    console.log(cpf);

    var resultadoValidacao = validarCpf(cpf);

    if(resultadoValidacao){
        var success = document.getElementById("success");
        success.style.display="block";
    }else{
        var error = document.getElementById("error");
        error.style.display="block";
    }
}

function validarCpf(cpf){

    return false;
}