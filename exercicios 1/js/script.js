function calcular(operacao){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    let resultado = 0;
    //aqui vou criar toda operação IF ELSE IF para determinar atráves dos numeros de entrada lá no input
    //como a variavel vai ser alterada, ou seja, ao colocar os dois numeros  
    if (operacao === '+'){
        resultado = adicao (num1, num2);
    } else if (operacao === '-'){
        resultado = subtracao (num1, num2);
    } else if (operacao === '*') {
        resultado = multiplicacao (num1, num2);
    } else if (operacao === '/') {
        resultado = divisao (num1, num2);
    } else {
        alert("Valor invalido");
    }

    document.getElementById("resultado").textContent = "resultado: " + resultado


    }

function adicao(a, b) {
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a / b;
}
