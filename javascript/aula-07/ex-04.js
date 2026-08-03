function listarNomes(array) {
    array.forEach(function (item, indice) {
        console.log(`${indice} - ${item}`)
    })
}
listarNomes(["Sophia", "Manoella", "Nabrumaleve"])