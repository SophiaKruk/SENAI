function soma(a, b) {
    return (a + b)
}
console.log(soma(5, 7))

function multi(a , b) {
    return (a * b)
}
console.log(multi(3, 10))

function subtr(a , b) {
    return (a - b)
}
console.log(subtr(1, 2))

function  dividir(a, b){
    if( b === 0){
        return "Erro: divisão por zero."
    }else{
        return a / b
    }
}
let valor4 =  dividir(4, 3)
console.log(valor4)
