const conteudo = document.querySelector("#conteudo")
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    conteudo.textContent = conteudo.innerHTML 
})