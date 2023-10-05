import adicao from './adicao.js';
import subtracao from './subtracao.js';
import divisao from './divisao.js';
import multiplicacao from './multiplicacao.js';

document.addEventListener("DOMContentLoaded", function () {
    
    let btnAdicao = document.getElementById("adicao");
    let btnDivisao = document.getElementById("divisao");
    let btnSubtracao = document.getElementById("subtracao");
    let btnMultiplicacao = document.getElementById("multiplicacao");

    let num1 = document.getElementById("numero1");
    let num2 = document.getElementById("numero2");

    let saida = document.getElementById("resultado");

    btnAdicao.addEventListener("click", function () {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);

        try {
            if (isNaN(n1)) {
                throw new Error("Caracteres não são validos")
            }
            if (isNaN(n2)){
                throw new Error("Caracteres não são validos")
            }

            let objeto = new adicao(n1,n2);
            let resultado = objeto.adicaoMetodo()
            saida.innerText = "Resultado: " + resultado;

        } catch (error) {
             saida.innerText = "Error" + error.mensage;
        }
    })
})
