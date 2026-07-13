let aluno = {
    nome: "sophia",
    matricula: 223344
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
}              //  nome  :   "sophia"
