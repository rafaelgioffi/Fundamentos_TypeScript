"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elfo = void 0;
const personagem_1 = require("./personagem");
const tipoPersonagem_1 = require("../enums/tipoPersonagem");
class Elfo extends personagem_1.Personagem {
    vida;
    constructor(nome) {
        super(nome, tipoPersonagem_1.TipoPersonagem.Elfo);
        this.vida = personagem_1.VIDA_MAX;
    }
    atacar() {
        console.log(`${this.tipo} ${this.nome} atacou com flecha!`);
    }
    curar() {
        console.log(`${this.nome} lançou um feitiço de cura!`);
        this.vida += 20;
    }
}
exports.Elfo = Elfo;
