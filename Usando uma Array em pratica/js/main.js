import {produto} from './produto.js';
import {produtos} from '.produtos.js';

let produtos = new produtos();

    function adicionarProduto(){
        let nome = document.getElementById("produtoInserido").value;

        if((nome === "")) {
         document.getElementById("resultado").innerText = "Insira um produto"
         return;
        }
        let novoProduto = new produto(nome);
        produtos.adicionarProduto(novoProduto);

        document.getElementById("listar").disable = false;
        document.getElementById("resultado").innerText = "Tarefa adicionada com sucesso";

        let lista = document.getElementById("lista")

    }

