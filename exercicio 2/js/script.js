function calcular(operacao){
    let num = parseFloat(document.getElementById("numero").value);
    let resultado = 0;

if (operacao === 'raiz'){
        resultado = raizQuadrada (num);
    } if (operacao === 'exp' ){
        resultado = exponencial (num);
    } else {
        alert(" valor invalido")
    }
}

document.getElementById("resultado").textContent = "resultado: " + resultado;

function raizQuadrada(num){
     Math.sqrt(num);
    console.log("FUNCIONOU PORRA");
}
function exponencial(num){
     Math.exp(num);
    console.log("FUNCIONOU PORRA");

}