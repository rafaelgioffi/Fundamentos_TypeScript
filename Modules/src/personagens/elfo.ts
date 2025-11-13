import { Personagem, VIDA_MAX } from "./personagem";
import { TipoPersonagem as Tipo} from "../enums/tipoPersonagem";

export class Elfo extends Personagem {
    vida: number;
    constructor(nome: string) {
        super(nome, Tipo.Elfo);
        this.vida = VIDA_MAX;
    }

    atacar() {
        console.log(`${this.tipo} ${this.nome} atacou com flecha!`)
    }

    curar() {
        console.log(`${this.nome} lançou um feitiço de cura!`)
        this.vida += 20;
    }
}