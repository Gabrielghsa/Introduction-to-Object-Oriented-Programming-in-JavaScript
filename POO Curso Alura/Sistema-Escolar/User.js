export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
    get sobrenome() {
        return this.#sobrenome
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (this.role !== 'admin') {
            throw new Error('Apenas ADMs podem fazer modificações!')
        }
        if (novoNome === "")
            throw new Error("Formato inválido")
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(" ")
        this.#nome = nome
        this.#sobrenome = sobrenome
    }

    exibirInfos(){
        return `${this.#nome} ${this.email}`
    }

    /* exibirInfos() { Simulando um overload e JS (JS não suporta overload (sobrecarga de métodos))
        if(this.role === "estudante")
            return `Dados do estudante: ${this.nome}`
        if(this.role === "admin")
            return `Dados do ADM: ${this.nome}, ${this.role}`
        if(this.role === "docente")
            return `Dados do docente: ${this.nome}, ${this.email}`
    } */

    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`
    }
}



