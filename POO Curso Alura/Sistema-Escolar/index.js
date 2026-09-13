import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./docente.js";

const novoUser = new User("Juriscleia", "Santos", "j@a321", "24/09/2003")
console.log(novoUser.exibirInfos())

const novoDocente = new Docente('Juliana', 'Soares', 'j@j.com', '2021-01-01')
console.log(novoDocente.exibirInfos())

const novoAdmin = new Admin("Macrebs", "Macrebado", "m@m123", "21/08/2001")
console.log(novoAdmin.exibirInfos())

const dadosFicticios = User.exibirInfosGenericas("João", "João@333")
console.log(dadosFicticios)


//novoUser.#nome = "Marcia"


//const novoAdmin = new Admin("Macrebs", "macrebs@321", "30/07/2001");
//console.log(novoAdmin.nome)
//console.log(novoAdmin.exibirNome())