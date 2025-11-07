"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    nome;
    tipo;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    caminhar(movimento) {
        console.log(`O(a) ${this.tipo} ${this.nome} caminhou ${movimento.passos} passos para ${movimento.direcao}.`);
    }
}
let gandalf = new Personagem("Gandalf", "Mago");
let legolas = new Personagem("Legolas", "Elfo");
gandalf.caminhar({ direcao: "cima", passos: 5 });
legolas.caminhar({ direcao: "baixo", passos: 4 });
