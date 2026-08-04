let produtos = [
    {nome: 'Mouse', preco: 50}, 
    {nome: 'Teclado', preco: 120}, 
    {nome: 'Monitor', preco: 800}
]
let produtosNomes = produtos.map(function(item){
    return item.nome
})
console.log(produtosNomes)