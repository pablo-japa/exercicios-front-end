export class produtos {
    #listaDeProdutos

    constructor(){
        this.#listaDeProdutos = [];
    }
    adicionarProduto(produto){
        this.#listaDeProdutos.push(produto)

        document.getElementById("produtoInserido").value ="";
        document.getElementById("buscarEstoque").value ="";
    }

    removerProduto(indicesSelecionados){
        let listaDeProdutos = this.#listaDeProdutos;
        indicesSelecionados.reverse();

    for (let i of indicesSelecionados){
        listaDeProdutos.splice(i, 1);
    }
    }
    listarProdutos(){
        let listaProdutos = document.getElementById("lista");

    while (listaProdutos.firstChild){
        listaProdutos.removeChild(listaProdutos.firstChild);
    }

    for (let i = 0; i < this.#listaDeProdutos.length; i++){
        let produto = this.#listaDeProdutos[i];
        let itemProduto = document.createElement("li");
        let caixaDeSelecaoEntrada = document.createElement("input");

        caixaDeSelecaoEntrada.type = "checkbox";
        caixaDeSelecaoEntrada.value = i;

        itemProduto.appendChild(caixaDeSelecaoEntrada);

        let produtoTexto = document.createTextNode(`Produto ${i + 1}: ${produto.toString()}`)
        itemProduto.appendChild(produtoTexto);

        listaProdutos.appendChild(itemProduto)
    }

    }

}
