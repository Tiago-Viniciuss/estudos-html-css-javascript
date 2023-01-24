function contar() {
var ini = document.getElementById('txt1')
var fim = document.getElementById('txt2')
var passos = document.getElementById('txt3')
var resultado = document.getElementById('resul')


var inicio = Number(ini.value)
var final = Number(fim.value)
var incremento = Number(passos.value)
resultado.innerHTML = 'Contando... <br>'

if ( incremento <= 0 ) {
    alert ('Passo inválido! Considerando PASSO 1')
    incremento = 1
}
if (inicio < final ) {
    // Contagem crescente
    for (var c = inicio; c <= final; c = c + incremento) {
        resultado.innerHTML += `${c} \u{1F449}`
    }
} else {
    // Contagem regressiva
    for (c = inicio; c >= final; c = c-incremento) {
        resultado.innerHTML += `${c} \u{1F449} `
    }
}
resultado.innerHTML += `\u{1F3C1}`

}