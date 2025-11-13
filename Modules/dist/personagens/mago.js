"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const personagem_1 = require("./personagem");
const tipoPersonagem_1 = require("../enums/tipoPersonagem");
class Mago extends personagem_1.Personagem {
    vida;
    constructor(nome) {
        super(nome, tipoPersonagem_1.TipoPersonagem.Mago);
        this.vida = personagem_1.VIDA_MAX;
    }
    caminhar() {
        console.log(`${this.tipo} ${this.nome} voou.`);
    }
    atacar() {
        console.log(`${this.nome} usou magia!`);
    }
    regenerar() {
        console.log(`${this.nome} lançou um feitiço de cura!`);
        this.vida += 10;
    }
}
exports.Mago = Mago;
