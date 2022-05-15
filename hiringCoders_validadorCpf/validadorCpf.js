console.log("JavaScript");
function validar(){
    var cpf = document.getElementById("cpf_input").value;
    //Limpando tela
    document.getElementById("success").style.display="none";
    document.getElementById("error").style.display="none";
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
    if(cpf.length != 11){
        return false;
    }
    else{

        var digitos = cpf.substring(9);
        console.log("Números: ", cpf.substring(0, 9));
        console.log("Digitos: ", digitos);

        var resCpf1 = validarDigito1(cpf.substring(0,9), digitos);
        var resCpf2 = validarDigito2(cpf.substring(0,10), digitos);
       
        return (resCpf1 && resCpf2);
    }
}
function validarDigito1(numeros, digitos){
    var soma = 0;
    for(i = 10; i > 1; i--){
        soma += numeros.charAt(10 - i) * i;
    }
    //pegando 0 caso seja menor que 2 ou o resto de (soma % 11)
    //var res = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    
    var modulo = soma % 11;
    //caso soma/11 seja 10 ou 11 o res é 0
    var res = modulo < 2 ? 0 : 11 - modulo;
    console.log("Soma: ", soma);
    console.log("Módulo: ", modulo);
    console.log("Res: ", res);
    console.log("Penultimo digito: ", digitos.charAt(0));
    //caso o res seja diferente do primeiro digito retorna falso
    if(res != digitos.charAt(0)) return false;

    return true;
}
function validarDigito2(numeros, digitos){
    var soma = 0;
    for(i = 11; i > 1; i--){
        soma += numeros.charAt(11 - i) * i;
    }
    var modulo = soma % 11;
    var res = modulo < 2 ? 0 : 11 - modulo;
    console.log("Soma: ", soma);
    console.log("Módulo: ", modulo);
    console.log("Res: ", res);
    console.log("Ultimo digito: ", digitos.charAt(1));
    if(res != digitos.charAt(1)) return false;
    return true;
}

