let nuns = [12, 5, 8, 21, 3, 11, 7];
let maior = 0;
let menor = 0;
let total = 0;
for(let i = 0; i < nuns.length; i++) {
    total = total + nuns[i]
    if(maior < nuns[i]) {
        maior = nuns[i]
    }
    if(i == 0) {
        menor = nuns[i]
    }
    if(menor > nuns[i]) {
        menor = nuns[i]
    }
}
console.log(`Maior: ${maior} - Menor: ${menor} - Total: ${total}`)