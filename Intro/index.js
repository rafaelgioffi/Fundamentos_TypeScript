var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.Nome = nome;
        this.Id = id;
    }
    return Cliente;
}());
var c1 = new Cliente(1, "Rafael");
console.log(c1.Id, c1.Nome);
