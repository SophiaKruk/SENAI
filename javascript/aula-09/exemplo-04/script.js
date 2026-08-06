let display = document.querySelector(".display");
let btnAum = document.querySelector(".btnAum");
let btnDim = document.querySelector(".btnDim");

let cont = 0;

btnAum.addEventListener("click", function(){
    cont++;
    display.textContent = cont;
})

btnDim.addEventListener("click", function(){
    cont--;
    display.textContent = cont;
})