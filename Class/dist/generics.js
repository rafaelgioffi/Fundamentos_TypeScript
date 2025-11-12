"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpcaoMenu {
    imprimir() {
        console.log(this);
    }
}
class Personagem extends OpcaoMenu {
    nome;
    constructor(nome) {
        super();
        this.nome = nome;
    }
    imprimir() {
        console.log(`Personagem: ${this.nome}`);
    }
}
class Armamento {
}
class Mapa {
    clima;
    constructor(clima) {
        this.clima = clima;
    }
}
class Menu {
    opcoes = [];
    adicionarOpcao(opcao) {
        this.opcoes.push(opcao);
    }
    imprimirOpcoes() {
        this.opcoes.forEach(opcao => console.log(opcao));
    }
}
let p1 = new Personagem('Saruman');
let p2 = new Personagem('Elrond');
let m1 = new Mapa('Deserto');
let m2 = new Mapa('Floresta');
let menu = new Menu();
menu.adicionarOpcao(p1);
menu.adicionarOpcao(p2);
menu.imprimirOpcoes();
