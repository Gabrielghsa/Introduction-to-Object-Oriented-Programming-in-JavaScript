const user = {
    nome: 'Juliana',
    email:  'juliana@123.com',
    nascimento: '27/04/1990',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: 'Macrebinha',
    email:  'macrebinha@123.com',
    nascimento: '27/04/1990',
    role: 'admin',
    ativo: true,
    criarCursos: function(){
        console.log("Curso criado");
    }
}
Object.setPrototypeOf(admin, user)//definindo um protótipo de user no admin
admin.criarCursos();
admin.exibirInfos();