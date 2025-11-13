import { TipoPersonagem } from "./enums/tipoPersonagem";
import { Personagem } from "./personagens/personagem";
import { Mago } from './personagens/mago';
import { Elfo } from './personagens/elfo';

let p1 = new Mago("Gandalf");
let p2 = new Elfo("Legolas");

p1.statusVida();
p1.caminhar();
p1.atacar();
p1.regenerar();
p1.statusVida();

p2.statusVida();
p2.atacar();
p2.curar();
p2.statusVida();