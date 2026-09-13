import Departamento from "./departamento.js";
import Pessoa from "./pessoa.js";
import Desenvolvedor from "./dev.js";
import Gerente from "./gerente.js";

const BackEnd = new Departamento();
const Macrebinho = new Desenvolvedor("Macrebinho", 40, 3000, BackEnd, "C#");

const novoFuncionario = new Pessoa("Macrebinha", 22, 100, BackEnd)

console.log(novoFuncionario.nome)
console.log(novoFuncionario.salario)
console.log(novoFuncionario.trabalha())

const Macrebs = new Gerente("Macrebs", 30, 5000, BackEnd, 10)
console.log(Macrebs.equipe)

