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
}