let numeros = [5, 12, 8, 21, 3, 15, 7]
let numerosMaiores = numeros.filter(function(item){
    return item % 2 == 0  
})
console.log(numerosMaiores)