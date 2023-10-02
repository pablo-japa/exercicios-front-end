
//função de calcular criada, peguei o metodo de calculo do google
function calcularValor() {
    let numero = parseInt(document.getElementById("numeroEntrada").value);
    const fibArray = [];
    for (let i = 0; i < numero; i++) {
        if (i <= 1) {
            fibArray.push(i);
        } else {
            const proximoNumero = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(proximoNumero);
        }
    }

    return fibArray;
}

//função de exibir o resultado criada
function exibirResultado(mensagem) {

    let saida = document.getElementById("resultado")
    saida.innerText = mensagem.join(" , ");

}
//função de iniciar criada
function iniciar() {

    let verificarBtn = document.getElementById("exibir")
    verificarBtn.addEventListener("click", function () {
        let mensagem = calcularValor()
        exibirResultado(mensagem);
    });
}
document.addEventListener("DOMContentLoaded", iniciar);