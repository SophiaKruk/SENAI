let idades = [12, 18, 25, 30, 15, 42]
let envelhecer = idades.find(function(item){
    return item > 100
})
console.log(envelhecer)