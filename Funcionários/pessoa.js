import Departamento from "./departamento.js";

export default class Pessoa{
    #salario
    constructor(nome, idade, salario, departamento){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.departamento = departamento;
    }

    get salario(){
        return `Salário: ${this.#salario}`
    }

    set salario(valor){
        if(valor > 0)
            this.#salario = valor;
    }

    apresentar(){
        return `Olá me chamo ${this.nome} tenho ${this.idade} anos.`;
    }

    trabalha(){

       return this.departamento != null ? `${this.nome} está trabalhando` : `${this.nome} ainda não está alocado em um departamento`;
    }

    static reuniao(departamento, nome){
        if(departamento == 'BackEnd' && nome == 'Macrebs')
            console.log(`Está em reunião, por favor aguarde.`) ;
        else 
             console.log(`Não está em reunião`);
    } 
}