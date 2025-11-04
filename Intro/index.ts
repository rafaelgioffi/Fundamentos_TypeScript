class Cliente {
    Id: number;
    Nome: string;

    constructor(id: number, nome: string) {
        this.Nome = nome;
        this.Id = id;
    }
}

let c1 = new Cliente(1, "Rafael");
let c2 = new Cliente(2, "Joel");
console.log(c1.Id, c1.Nome);
console.log(c2.Id, c2.Nome);