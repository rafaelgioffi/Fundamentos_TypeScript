"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoPersonagem;
(function (TipoPersonagem) {
    TipoPersonagem["Guerreiro"] = "Guerreiro";
    TipoPersonagem["Mago"] = "Mago";
    TipoPersonagem["Arqueiro"] = "Arqueiro";
    TipoPersonagem["Elfo"] = "Elfo";
})(TipoPersonagem || (TipoPersonagem = {}));
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
// let p1 = new Personagem('Saruman', 'Mago');
class Mago extends Personagem {
    constructor(nome) {
        super(nome, TipoPersonagem.Mago);
    }
    caminhar() {
        console.log(`${this.tipo} ${this.nome} voou.`);
    }
    atacar() {
        console.log(`${this.nome} usou magia!`);
    }
}
class Elfo extends Personagem {
    constructor(nome) {
        super(nome, TipoPersonagem.Elfo);
    }
    atacar() {
        console.log(`${this.tipo} ${this.nome} atacou com flecha!`);
    }
}
let p2 = new Mago('Gandalf');
let p3 = new Elfo('Elrond');
console.log(p2);
// p1.caminhar();
p2.caminhar();
p3.caminhar();
p2.atacar();
p3.atacar();
