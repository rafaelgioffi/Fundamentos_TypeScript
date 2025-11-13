"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const tipoPersonagem_1 = require("../enums/tipoPersonagem");
class Personagem {
    nome;
    tipo;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    caminhar() {
        console.log(`${this.nome} caminhou.`);
    }
}
exports.Personagem = Personagem;
