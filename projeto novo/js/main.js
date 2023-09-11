import aluno from './aluno.js';
import professor from './professor.js';

let alunoObjeto = new aluno("Paulo", 16, 1310);
let professorObjeto = new professor("Tonhão", 35, "engenharia de automoveis");

console.log(alunoObjeto.apresentar());
console.log(professorObjeto.apresentar());