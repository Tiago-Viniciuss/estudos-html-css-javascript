var idade = 65
console.log (`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Portanto, não vota!')
} else if (idade < 18 || idade >= 65) {
    console.log('O seu voto é opcional!')
} else{
    console.log ('O seu voto é obrigatório!')
}