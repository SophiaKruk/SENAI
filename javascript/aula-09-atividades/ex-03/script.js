const btnAcao = document.querySelector('#btnAcao')
const infoBotao = document.querySelector('#infoBotao')

btnAcao.addEventListener("click", function(){
    infoBotao.textContent = btnAcao.textContent
})