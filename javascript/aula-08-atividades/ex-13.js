let frutas = ['maçã', 'banana', 'laranja', 'uva']
let cesta = frutas.find(function(item){
    return item.startsWith("l")
})
console.log(cesta)