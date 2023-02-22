var idade = 85
console.log (`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Portanto, não vota!')
} else if (idade < 18 || idade > 65  && idade < 80 ) {
    console.log('O seu voto é opcional!')
} else if (idade > 80){
    console.log(`Com ${idade} anos, você está velho demais pra votar, se aquiete!`)
} else{
    console.log ('O seu voto é obrigatório!')
} 