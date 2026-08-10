const titulo = document.querySelector("h1")
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    titulo.textContent = "Título Modificado com Sucesso!"
})