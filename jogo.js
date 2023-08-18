const numeroSecreto = 22;
let tentativas = 0;

for (let i = 0; i < 10; i++) {
    const palpiteAtual = parseInt(prompt("Digite um número:"));

    if (palpiteAtual === numeroSecreto) {
        alert("Eba! Você acertou!");
        break;
    } else {
        tentativas++;
        if (tentativas >= 5) {
            alert(`Você perdeu. O número secreto era: ${numeroSecreto}`);
            break;
        }
    }
}