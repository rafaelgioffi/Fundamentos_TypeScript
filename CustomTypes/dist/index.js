"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function caminhar(direcao: Direcao, passos: number) {
//     console.log(`O personagem caminhou ${passos} passos para ${direcao}.`);
// }
function caminhar(movimento) {
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}.`);
}
// caminhar("cima", 5);
// caminhar("baixo", 4);
// caminhar("abc", 3);
caminhar({ direcao: "cima", passos: 5 });
caminhar({ direcao: "baixo", passos: 4 });
caminhar({ direcao: "esquerda", passos: 3 });
caminhar({ direcao: "direita", passos: 6 });
