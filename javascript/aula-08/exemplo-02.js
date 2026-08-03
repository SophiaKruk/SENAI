let alunos = [
    {nome: 'Sophia', nota: 9},
    {nome: 'Manoella', nota: 8}
]
let nomes = alunos.map(function(aluno){
    return aluno.nome   
})
console.log(nomes)