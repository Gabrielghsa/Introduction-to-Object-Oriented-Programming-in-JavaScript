function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibirInfos = function() {
   return `${this.nome}, ${this.email}`
 }
}
function Admin(role) {//this está no contexto de User e será reaproveitado em Admin
 User.call(this, 'Juliana', 'j@j.com')
 this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')
console.log(juliana.exibirInfos())
console.log(juliana.role)



const user = {
 exibirInfos: function(user) {
   return `${user.nome}, ${user.email}`
 }
}

const macrebinha = Object.create(user)
console.log(macrebinha.exibirInfos({nome: 'Macrebinha', email: 'm@m.com'}))