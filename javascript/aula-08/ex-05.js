let produtos = [
    {id:1,nome:"QBoa",preco:6.70,categoria:"limpeza"},
    {id:2,nome:"Veja",preco:10,categoria:"limpeza"},
    {id:3,nome:"Detergente",preco:4.20,categoria:"pia"},
    {id:4,nome:"Dawne",preco:67.42,categoria:"lavanderia"},
    {id:5,nome:"BYD",preco:1000,categoria:"carro"}
]                                       
let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)
let limpezas = produtos.filter(function(item){
    return item.categoria === "limpeza"
}) 
console.log(limpezas)
let encontrado = produtos.find(function(item){
    return item.id === 3
})
console.log(encontrado)
let nomeMaiores = produtos.filter(function(item){
    return item.preco > 10
}).map(function(item){
    return item.nome
})
console.log(nomeMaiores)