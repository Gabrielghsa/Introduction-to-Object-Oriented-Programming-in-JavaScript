import User from "./User.js";

export default class Admin extends User{
    constructor(nome, sobrenome, email, nascimento, role = "admin", ativo = true){
        super(nome, sobrenome, email, nascimento, role, ativo);
    }

    exibirInfos(){
        return `O funcionário ${super.exibirInfos()} é um Administrador`
    }

    criarCurso(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} foi criado com ${qtdVagas} vagas`
    }

}


