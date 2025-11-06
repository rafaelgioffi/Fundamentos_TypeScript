"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    nome;
    tipo;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}
let gandalf = new Personagem("Gandalf", "Mago");
console.log(gandalf);
