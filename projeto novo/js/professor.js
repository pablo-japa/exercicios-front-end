import pessoa from './pessoa.js'

export default class professor extends pessoa {
    #especialidade

    constructor(nome, idade, especialidade) {
        super(nome, idade)
        this.#especialidade = especialidade
    }
    get getEspecialidade(){
        return this.#especialidade
    }
    apresentar() {
        console.log("Olá, meu nome é " + this.getNome + " , tenho " + this.getIdade + " Anos, sou professor em " + this.getEspecialidade + 
         " aqui no senai")
    }
}   