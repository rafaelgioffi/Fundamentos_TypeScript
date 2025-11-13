import { TipoPersonagem } from "../enums/tipoPersonagem";

abstract class Personagem {
    nome: string;
    tipo: TipoPersonagem;
    vida: number = VIDA_MAXIMA;
    
    constructor(nome: string, tipo: TipoPersonagem) {
        this.nome = nome;
        this.tipo = tipo;
    }
    
    caminhar() {
        console.log(`${this.nome} caminhou.`);
    }
    
    abstract atacar() : void;

    statusVida() {
        console.log(`${this.nome} tem ${this.vida} HP.`);
    }
}

const VIDA_MAXIMA = 100;
export { Personagem, VIDA_MAXIMA as VIDA_MAX };