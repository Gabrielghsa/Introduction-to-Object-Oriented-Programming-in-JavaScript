import Departamento from "./departamento.js";
import Pessoa from "./pessoa.js";

export default class Desenvolvedor extends Pessoa{
    constructor(nome, idade, salario, departamento, linguagem){
        super(nome, idade, salario, departamento)
        this.linguagem = linguagem;
    }

    trabalha(){
        return `${super.trabalha()} com a linguagem de programação ${this.linguagem}`
    }
}