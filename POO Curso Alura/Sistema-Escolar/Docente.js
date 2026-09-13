import User from "./User.js";

export default class Docente extends User{
    constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true){
        super(nome, sobrenome, email, nascimento, role, ativo);
    }

    exibirInfos(){
        return `O usuário ${super.exibirInfos()} é um ${this.role}`
    }

    aprovarEstudante(nomeEstudante, matricula){
        if(matricula)
            return `O aluno ${nomeEstudante} de matricula ${matricula}, foi aprovado pela ${this.nome}`;
        else
            return `Matricula inválida...`;
    }
}

const novaDocente = new Docente('Juriscleia', 'j@j123', '03/10/2000');
//console.log(novaDocente.aprovarEstudante("Macrebs", 322345));