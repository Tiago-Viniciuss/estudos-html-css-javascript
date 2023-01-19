function somar() {
    var numero1 = document.getElementById('txt1')
    var numero2 = document.getElementById('txt2')
    var resultado = document.getElementById('resul')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var total = n1+n2
    resultado.innerHTML = total
    resultado.style.color = '#000000'
    
}

function subtrair () {
    var numero1 = document.getElementById('txt1')
    var numero2 = document.getElementById('txt2')
    resultado = document.getElementById ('resul')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var total = n1-n2
    resultado.innerHTML = total
    resultado.style.color = '#000000'
}

function multiplicar () {
    var numero1 = document.getElementById('txt1')
    var numero2 = document.getElementById('txt2')
    var resultado = document.getElementById('resul')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var total = n1*n2
    resultado.innerHTML = total
    resultado.style.color = '#000000'
}

function dividir () {
    var numero1 = document.getElementById('txt1')
    var numero2 = document.getElementById('txt2')
    var resultado = document.getElementById('resul')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var total = n1/n2
    resultado.innerHTML = total
    resultado.style.color = '#000000'

}