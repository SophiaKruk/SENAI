let produtos = [
    {id:1, nome:"Celular"},
    {id:2, nome:"Computador"}
]
let encontrado = produtos.find(function(item) {
    return item.id === 2
})
console.log(encontrado)