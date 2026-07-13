let compras = [];

compras.push("Arroz", "Feijão", "Macarrão", "Frutas", "Carne");
console.log(compras);

compras.forEach(function(item,indice) {
    console.log(`${indice + 1}º - ${item}`)
});

console.log(compras.includes("Arroz"));

compras.pop();
console.log(compras);

console.log(compras.length);
compras.forEach(function(item,indice) {
    console.log(`${indice + 1}º - ${item}`)
});

