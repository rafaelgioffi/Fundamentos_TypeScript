enum TipoPersonagem {
    Guerreiro = 'Guerreiro',
    Mago = 'Mago',
    Arqueiro = 'Arqueiro',
    Elfo = 'Elfo'
}

abstract class Personagem {
    nome: string;
    tipo: TipoPersonagem;

    constructor(nome: string, tipo: TipoPersonagem) {
        this.nome = nome;
        this.tipo = tipo;
    }

    caminhar() {
        console.log(`${this.nome} caminhou.`);
    }

    abstract atacar() : void;
}

// let p1 = new Personagem('Saruman', 'Mago');

class Mago extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Mago);
    }
    
    caminhar() {
        console.log(`${this.tipo} ${this.nome} voou.`)
    }

    atacar() {
        console.log(`${this.nome} usou magia!`)
    }
}

class Elfo extends Personagem {
    constructor(nome: string) {
        super(nome, TipoPersonagem.Elfo);
    }

    atacar() {
        console.log(`${this.tipo} ${this.nome} atacou com flecha!`)
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