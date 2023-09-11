import pessoa from './pessoa.js';

export default class aluno extends pessoa {
    #matricula;

    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.#matricula = matricula;
    }
    get getMatricula() {
        return this.#matricula;
    }
    apresentar() {
        console.log("Olá, meu nome é " + this.getNome + " , tenho " + this.getIdade + " Anos, meu numero de matricula é " + this.getMatricula +
        " aqui no senai")
    }
}