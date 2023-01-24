function calcular() {
    var nome1 = document.getElementById('nome')
    var sal = document.getElementById('salario')
    var reaj = document.getElementById('reajuste')
    var resultado = document.getElementById('resul')
    var nome = String(nome1.value)
    var salario = Number(sal.value)
    var reajuste = Number(reaj.value)
    var novosalario = salario + (salario*reajuste/100)
    resultado.innerHTML = `<p>De acordo com o reajuste de ${reajuste}%,<br>o novo salário de ${nome} será o valor de R$${novosalario}</p>`
    resultado.style.textAlign = 'center'
    resultado.style.backgroundColor = 'white' 
    resultado.style.padding = '5px 0px 5px 0px'




}