type Direcao = "cima" | "baixo" | "esquerda" | "direita";

type Movimento = {
    direcao: Direcao;
    passos: number;
}

// function caminhar(direcao: Direcao, passos: number) {
//     console.log(`O personagem caminhou ${passos} passos para ${direcao}.`);
// }
function caminhar(movimento: Movimento) {
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}.`);
}

// caminhar("cima", 5);
// caminhar("baixo", 4);
// caminhar("abc", 3);
caminhar({ direcao: "cima", passos: 5 });
caminhar({ direcao: "baixo", passos: 4 });
caminhar({ direcao: "esquerda", passos: 3 });
caminhar({ direcao: "direita", passos: 6 });