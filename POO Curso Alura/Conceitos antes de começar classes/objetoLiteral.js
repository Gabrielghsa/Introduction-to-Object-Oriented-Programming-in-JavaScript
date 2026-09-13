//Apenas um objeto comum em JS
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
/* user.exibirInfos() */
/* const exibir = user.exibirInfos
exibir() */

const exibir = function(){ 
    console.log(this.nome, this.email)
}
const exibirNome = exibir.bind(user); //bind junta duas coisas, nesse caso ele está juntando a função exibir com o objeto user
exibirNome()


