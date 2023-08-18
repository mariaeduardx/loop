const lugaresQueVisitei = ["Paris", "Nova York", "Tóquio", "Londres", "Itália"];
const lugaresDoAmiguinho = ["Nova York", "Londres", "Carolina do Norte", "Itália", "Floripa"];

const lugaresEmComum = [];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresDoAmiguinho.length; j++) {
        if (lugaresQueVisitei[i] === lugaresDoAmiguinho[j]) {
            lugaresEmComum.push(lugaresQueVisitei[i]);
        }
    }
}

console.log("Lugares em comum:");
for (let i = 0; i < lugaresEmComum.length; i++) {
    console.log(lugaresEmComum[i]);
}
