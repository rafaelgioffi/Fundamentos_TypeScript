import { Personagem, VIDA_MAX } from "./personagem";
import { TipoPersonagem } from "../enums/tipoPersonagem";

export class Mago extends Personagem {
    vida: number;
    constructor(nome: string) {
        super(nome, TipoPersonagem.Mago);
        this.vida = VIDA_MAX;
    }
    
    caminhar() {
        console.log(`${this.tipo} ${this.nome} voou.`)
    }

    atacar() {
        console.log(`${this.nome} usou magia!`)
    }

    regenerar() {
        console.log(`${this.nome} lançou um feitiço de cura!`)
        this.vida += 10;
    }
}