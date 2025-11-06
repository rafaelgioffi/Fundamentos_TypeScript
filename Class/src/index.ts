class Personagem {
    nome: string;
    tipo: string;

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

let gandalf = new Personagem("Gandalf", "Mago");
