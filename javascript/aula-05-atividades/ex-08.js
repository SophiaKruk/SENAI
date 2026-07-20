let valor = 250;

if(valor >= 500){
    console.log("20% de desconto: R$", valor * 0.2, "E o valor total é: R$", valor * 0.8)
} else if (valor >= 200) {
    console.log("10% de desconto: R$", valor * 0.1, "E o valor total é: R$", valor * 0.9)
} else if (valor >= 100) {
    console.log("5% de desconto: R$", valor * 0.05, "E o valor total é: R$", valor * 0.95)
} else {
    console.log("Sem desconto")
}