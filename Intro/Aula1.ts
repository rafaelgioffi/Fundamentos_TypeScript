type TipoPessoa = "PF" | "PJ";

class Cliente{
Nome: string | undefined;
Tipo: TipoPessoa;

constructor(nome: string, tipo: TipoPessoa){
    this.Nome = nome;
    this.Tipo = tipo;
}
}

class Repositorio<T> {
    adicionar(objeto: T) {
        console.log("Salvando objeto");
    }
}

var c1 = new Cliente("Joel", "PF");
var repositorio = new Repositorio<Cliente>();
repositorio.adicionar(c1);