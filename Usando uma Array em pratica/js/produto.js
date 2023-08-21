export class produto {

    #nome
    #estoque
    #codigo

    constructor(nome, estoque){
        this.#nome = nome;
        this.#estoque = estoque;
        

    }

    get getNome(){
        return this.#nome;
    }
    get getEstoque(){
        return this.#estoque;
    }
    get getCodigo(){
        return this.#codigo;
    }
    set setNome(valor){
        this.#nome = valor;
    }
    set setEstoque(valor){
        this.#estoque = valor;
    }
    set setCodigo(valor){
        this.#codigo = valor;
    }

    toString(){
        return `Nome: ${this.#nome}, Estoque: ${this.estoque} codigo: `
    }
}