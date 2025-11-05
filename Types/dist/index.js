"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
let nome = "Rafael";
let sobrenome = 'Gioffi';
console.log(nome);
console.log(typeof nome);
//number
let idade = 41;
let temperatura = 25.7;
console.log(typeof idade);
console.log(typeof temperatura);
//boolean
let ligado = true;
let desligado = false;
console.log(ligado);
console.log(desligado);
// Concatenação
console.log('A' + 'B');
console.log('A' + 'B' + 3);
console.log(4 + 3);
//----------------------
//Tipo declarado
let Idade = 9;
Idade = 10;
Idade = true;
console.log(Idade);
// -------------------------------
let notas = [];
let paises;
let cidades = ['Natal', 'Recife', 'São Paulo'];
notas.push(10);
console.log(notas[0]);
console.log(cidades.length);
// --------------------------
// Objetos
// cliente = 1; -- vai dar erro pq está atribuindo antes de declarar o objeto e tem um dado em formato inválido
let cliente = {
    nome: 'Rafael',
    email: 'rafael@email.com',
    saldo: 1000,
    ativo: true
};
cliente = {
    nome: 'Maria',
    email: 'maria@email.com',
    saldo: 100,
    ativo: false
};
let produto;
let aluno;
aluno = {
    matricula: '0001',
    nome: 'Joãozinho'
};
console.log(cliente);
console.log(produto);
console.log(aluno);
// -------------------------------
let nomeAny;
nomeAny = 'Rafael';
nomeAny = 1;
nomeAny = {
    idade: 19
};
// nomeAny = () => {
//     console.log('Olá!')
// };
nomeAny();
// -------------------------------------
// undefined
let nomeUndef;
let nomeNull;
console.log(nomeUndef);
console.log(nomeNull);
if (nomeNull == null) {
    console.log('É nulo');
}
