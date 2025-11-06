function exibirMensagem() {
    console.log("Olá, mundo!");
}

function exibirMensagemComParam(mensagem: string, nome: string) {
    console.log(mensagem, nome);
}

function calcularPreco(precoOriginal: number, tx: number) {
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