let numeros = [5, 12, 8, 21, 3, 15, 7]
let num = numeros.filter(function(item){
    return item > 100
})
console.log(num.length)