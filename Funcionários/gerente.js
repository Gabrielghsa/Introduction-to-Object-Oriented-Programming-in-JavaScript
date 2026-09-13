import Departamento from "./departamento.js";
import Pessoa from "./pessoa.js";

export default class Gerente extends Pessoa{
    constructor(nome, idade, salario, departamento, equipe){
        super(nome, idade, salario, departamento)
        this._equipe = equipe;
    }

    get equipe(){
        return `${this.nome} gerência uma equipe de ${this._equipe} pessoas`
    }

    trabalha(){
        return `${super.trabalha()} como gerente`
    }
}