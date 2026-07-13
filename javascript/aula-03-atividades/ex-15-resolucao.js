// 1. Array vazio
let compras = []

// 2. Adicionar 5 itens
compras.push("arroz")
compras.push("feijão")
compras.push("macarrão")
compras.push("leite")
compras.push("pão")

// 3. Exibir todos os itens numerados
console.log("📋 Lista de compras:")
compras.forEach(function(item, i) {
  console.log(`${i + 1}. ${item}`)
})

// 4. Verificar se 'arroz' está na lista
console.log("Arroz está na lista?", compras.includes("arroz"))  // true

// 5. Remover o último item
let removido = compras.pop()
console.log("Item removido:", removido)  // "pão"

// 6. Exibir lista atualizada com total
console.log("Lista atualizada (${compras.length} itens):")
compras.forEach(function(item, i) {
  console.log(`${i + 1}. ${item}`)
})