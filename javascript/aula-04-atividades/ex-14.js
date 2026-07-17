let amigos = [
    {nome: 'Manuela', idade: 14},
    {nome: 'Gigi', idade: 15},
    {nome: 'Duda', idade: 16},
    {nome: 'Julia', idade: 17},
];

nomes = [];
idades = [];

amigos.forEach(function(amigo){
    nomes.push(amigo.nome)
    idades.push(amigo.idade)
}
)

console.log(nomes, idades);