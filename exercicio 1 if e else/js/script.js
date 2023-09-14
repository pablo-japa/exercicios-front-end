//cria a função de if e else que verifica o valor, se é positivo ou não
function verificarValor() {
    let numero1 = (document.getElementById("numero1").value);

    //se o numero for maior que zero é positivo
    if (numero1 > 0) {
        return "O numero é positivo";
    //menor que zero é negativo
    } else if (numero1 < 0) {
        return "O numero é negativo";
    //nenhum dos dois, o numero certamento é zero
    } else {
        return "o numero é 0"
    }
}
//a função de iniciar é criada
function iniciar() {
    //puxa o id de EXIBIR no button, atribuindo-o em uma variavel
    let verificarBtn = document.getElementById("exibir");
//adiciona um eventListener com função de ONCLICK e cria dentro dele uma função anonima
    verificarBtn.addEventListener("click", function () {
        //a função anonima tem a função de atribuir a função de verificar o valor na variavel_
        //mensagem a baixo, e logo depois criei a function de Saida do resultado com a função de justamente
        //passar a mensagem que é o valor verificado
        let mensagem = verificarValor();
        saidaResultado(mensagem)
    });
}

//cria-se a função de saida, para indicar o resultado no front end
function saidaResultado(mensagem) {
    let saida = document.getElementById("resultado");
    saida.innerText = mensagem;

}


document.addEventListener("DOMContentLoaded", iniciar);