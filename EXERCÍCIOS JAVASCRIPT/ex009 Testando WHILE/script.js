function comecar() {
    var ini = document.getElementById("txt1")
    var contagem = document.getElementById("cont")

    var inicio = Number(ini.value)
    

    while (inicio < 20) {
        inicio = inicio + 1
        contagem.innerHTML = `${inicio}`
    } 

    

}