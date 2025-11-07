"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p1;
p1 = {
    nome: "Gandalf",
    tipo: "Mago",
    caminhar() {
        console.log(`Personagem caminhou.`);
    }
};
p1.caminhar();
class Mago {
    nome;
    tipo;
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'Mago';
    }
    caminhar() {
        console.log('O mago caminhou usando magia.');
    }
}
class Elfo {
    nome;
    tipo;
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'Elfo';
    }
    caminhar() {
        console.log('O elfo caminhou pulando.');
    }
}
let gandalf = new Mago("Gandalf");
gandalf.caminhar();
let player1;
player1 = new Elfo("Legolas");
player1.caminhar();
