let pessoa = {
    nome: "Sophia",
    idade: 14,
    altura: 1.70,
    estudante: true
}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
} 