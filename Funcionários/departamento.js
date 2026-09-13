export default class Departamento{
    constructor(nome){
        this.nome = nome;
    }
    exibirDepartamento(){
        return `Departamento ${this.nome}`
    }
}