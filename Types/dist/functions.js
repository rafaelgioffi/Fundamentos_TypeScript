"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirMensagem() {
    console.log("Olá, mundo!");
}
function exibirMensagemComParam(mensagem, nome) {
    console.log(mensagem, nome);
}
function calcularPreco(precoOriginal, tx) {
    let novoPreco = precoOriginal * (1 + tx / 100);
    return novoPreco.toFixed(2);
}
exibirMensagem();
exibirMensagem();
exibirMensagemComParam('Boa noite,', 'Rafael');
let taxaExtra = calcularPreco(100, 10);
let desconto = calcularPreco(200, -15);
console.log(taxaExtra);
console.log(desconto);
