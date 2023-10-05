import adicao from './adicao.js';
import subtracao from './subtracao.js';
import divisao from './divisao.js';
import multiplicacao from './multiplicacao.js';
//metodo de carregar o conteudo e a função
document.addEventListener("DOMContentLoaded", function () {


    //cria as variasveis e atribui ela aos botões
    let btnAdicao = document.getElementById("adicao");
    let btnDivisao = document.getElementById("divisao");
    let btnSubtracao = document.getElementById("subtracao");
    let btnMultiplicacao = document.getElementById("multiplicacao");

    //cria as variaveis e atribui os numeros as elas 
    let num1 = document.getElementById("numero1");
    let num2 = document.getElementById("numero2");

    //cria a variavel de saida e atribui ela ao ID do P para usa-lo como saida
    let saida = document.getElementById("resultado");

    //Adiciona um event listener que no click iniciar a função de conversão para os numeros "numero1" e "numero2"
    //convertendo os em floate atribuindo-os nas váriaveis n1, n2.
    btnAdicao.addEventListener("click", function () {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);


        //primeiro metodo de exception com um try catch
        try {
            if (isNaN(n1)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 
                throw new Error("Caracteres não são validos")
            }
            if (isNaN(n2)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 

                throw new Error("Caracteres não são validos")
            }
            //instancia o objeto, no caso a soma né
            //e na linha de baixo já puxa ela, trazendo-a como resultado
            let adicaoConta = new adicao(n1, n2);
            let resultadoAdicao = adicaoConta.adicaoMetodo(n1, n2);
            saida.innerText = "Resultado: " + resultadoAdicao;
        } catch (error) {
            saida.innerText = "Error" + error.mensage;
        }
    })


    btnDivisao.addEventListener("click", function () {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);


        //primeiro metodo de exception com um try catch
        try {
            if (isNaN(n1)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 
                throw new Error("Caracteres não são validos")
            }
            if (isNaN(n2)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 

                throw new Error("Caracteres não são validos")
            }
            //instancia o objeto, no caso, divisão
            //e na linha de baixo já puxa ela, trazendo-a como resultado
            let divisaoConta = new divisao(n1, n2);
            let resultadoDivisao = divisaoConta.divisaoMetodo(n1, n2);
            saida.innerText = "Resultado: " + resultadoDivisao;
        } catch (error) {
            saida.innerText = "Error" + error.mensage;
        }
    })
    btnAdicao.addEventListener("click", function () {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);


        //primeiro metodo de exception com um try catch
        try {
            if (isNaN(n1)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 
                throw new Error("Caracteres não são validos")
            }
            if (isNaN(n2)) {

                //throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 

                throw new Error("Caracteres não são validos")
            }
            //instancia o objeto, no caso a soma né
            //e na linha de baixo já puxa ela, trazendo-a como resultado
            let adicaoConta = new adicao(n1, n2);
            let resultadoAdicao = adicaoConta.adicaoMetodo(n1, n2);
            saida.innerText = "Resultado: " + resultadoAdicao;
        } catch (error) {
            saida.innerText = "Error" + error.mensage;
        }
    })
    btnSubtracao.addEventListener("click", function () {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);


//primeiro metodo de exception com um try catch
        try {
            if (isNaN(n1)) {

//throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 
                throw new Error("Caracteres não são validos")
            }
            if (isNaN(n2)){

//throw é usado para lançar a mensagem de erro caso os caracteres não sejam validos 

                throw new Error("Caracteres não são validos")
            }
//instancia o objeto, no caso a soma né
//e na linha de baixo já puxa ela, trazendo-a como resultado
            let subtracaoConta = new subtracao(n1,n2);
            let resultadoSubtracao = subtracaoConta.subtracaoMetodo(n1,n2);
            saida.innerText = "Resultado: " + resultadoAdicao;
        }catch (error) {
             saida.innerText = "Error" + error.mensage;
        }
    })
});


