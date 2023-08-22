import {produto} from './produto.js';
import {produtos} from '.produtos.js';

let produtos = new Produtos();

    function adicionarProduto(){
        let nome = document.getElementById("produtoInserido").value;

        if((nome === "")) {
         document.getElementById("resultado").innerText = "Insira um produto"
         return;
        }
        let novoProduto = new produto(nome);
        produtos.adicionarProduto(novoProduto);

        //O comando abaixo habilita o botão
        document.getElementById("listar").disable = false;
        document.getElementById("resultado").innerText = "Tarefa adicionada com sucesso";

        let lista = document.getElementById("lista");
        while (lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }

    function verificarEntradaMarcada(entrada){
        if (entrada.checked){
            return true;
        } else{
            return false;
        }
    }


    function validarEventoCliqueCaixaSelecao(entrada){
        entrada.addEventListener("change", function tratarMudancaSelecao(){
            atualizarEstadoRemovedor();
        });

    }

    function atualizarEstadoRemovedor(){
        let lista = document.getElementById("lista");
        let caixaDeSelecaoEntrada = lista.querySelectorAll("input[type='checkbox']");
        let algumSelecionado = Array.from(caixaDeSelecaoEntrada).some(verificarEntradaMarcada);
        let botaoRemover = document.getElementById("remover");

        if(algumSelecionado == true){
            botaoRemover.disable = false;
        } else {
            botaoRemover.disable = true;
        }

    function listarProduto(){
        let lista = document.getElementById('lista');
        
        while (lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
        produtos.listaProdutos();

        let caixaDeSelecaoEntrada = lista.querySelectorAll("input[type='check']");

        for (let i = 0; i < caixaDeSelecaoEntrada.length; i++) {
            let entrada = caixaDeSelecaoEntrada[i];
            validarEventoCliqueCaixaSelecao(entrada);
        }
        atualizarEstadoRemovedor();

        document.getElementById("resultado").innerText = "";
    }

    function removerProdutos(){
        let lista = document.getElementById("lista");
        let caixaDeSelecaoEntrada = lista.querySelectorAll ("input[type='checkbox']:checked");
        let indicesSelecionados = [];   
        for (let i = 0; i < caixaDeSelecaoEntrada.length; i++);{
            indicesSelecionados.push(entrada.value);
        }

        tarefas.removerProdutos(indicesSelecionados);
        
        listarProduto();
    }

    function iniciar(){
        produtos = new produtos();

        let inserir = document.getElementById("inserir");
        let listar = document.getElementById("listar");
        let remover = document.getElementById("remover");

        inserir.addEventListener("click", adicionarProduto);
        listar.addEventListener("click", listarProduto);
        remover.addEventListener("click", removerProdutos);

        remover.disable = true;
        listar.disable = true
        
        document.addEventListener("DOMContentLoaded", iniciar)


    }
    }

