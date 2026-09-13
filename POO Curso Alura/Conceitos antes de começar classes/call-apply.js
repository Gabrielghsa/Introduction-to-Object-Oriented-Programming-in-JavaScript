//método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this,
//ou seja, é possível atribuir um this diferente do contexto atual ao executar a função

//Exemplo do call() para especificar o contexto do this
function exibeInfos() {
 console.log(this.nome, this.email)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}

exibeInfos.call(user)

//Fazendo com que a função seja executada em determinado contexto, mesmo após ser intanciada
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos = function(){
   console.log(this.nome, this.email)
 }
}

const newUser = new User('mariana', 'm@m.com')

const outroUser = {
 nome: 'Rodrigo',
 email: 'r@r.com'
}

newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

//Também é possível passar parâmetros para o call()
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const userr = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(userr, this.nome, this.email)
 }
}

userr.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com


//-----------------------------------
//MÉTODO APPLY() funciona da mesma forma que o call() porém recebe como argumentos um array
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const userApply = {
 nome: 'Macrebinha',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.apply(userApply, [this.nome, this.email])
 }
}
 userApply.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com