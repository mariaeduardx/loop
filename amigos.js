const amigosDoFace = ["Fefa", "Lucas", "Maria", "Isa"];
const amigosDoFaceDoKaian = ["Bella", "Mat", "Duda", "Gaby"];

const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
    for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
        if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
            amigosEmComum.push(amigosDoFace[i]);
        }
    }
}

console.log("Amigos em comum:");
for (let i = 0; i < amigosEmComum.length; i++) {
    console.log(amigosEmComum[i]);
}
