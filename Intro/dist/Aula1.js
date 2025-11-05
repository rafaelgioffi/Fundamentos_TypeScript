"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    Nome;
    Tipo;
    constructor(nome, tipo) {
        this.Nome = nome;
        this.Tipo = tipo;
    }
}
class Repositorio {
    adicionar(objeto) {
        console.log("Salvando objeto");
    }
}
var c1 = new Cliente("Joel", "PF");
var repositorio = new Repositorio();
repositorio.adicionar(c1);
