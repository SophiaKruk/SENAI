let contatos = [
    {id: 1, nome:"Sophia"},
    {id:2, nome:"Manoella"}
]
let encontrado = contatos.find(function(item){
    return item.id === 2
})
console.log(encontrado)