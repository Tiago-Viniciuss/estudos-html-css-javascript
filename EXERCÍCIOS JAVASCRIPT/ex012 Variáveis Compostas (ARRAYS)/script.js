// Uma array/vetor, é uma variável composta. Ou seja, uma variável com vários espaços/elementos. Esses elementos possuem um índice (key/chave de identificação) e um conteúdo (value/valor).


/*

let num = [3, 5, 9]

console.log(`Nosso vetor é o ${num}`)



---------------------------------

Neste caso, eu tenho um vetor com 3 elementos, com os valores 3, 5 e 9 e os índices 0, 1 e 2. São 3 espaços e, da esquerda para a direita, começo a contar 0, 1, 2... 

Para adicionar mais um elemento ao meu vetor, é simples.

Adiciono ao código:

num[3] = 6 


O JS vai acrescentar mais um elemento. Com o value 6 e a key 3
---------------------------

let num = [3, 5, 9]

num[3] = 6

console.log(`Nosso vetor é o ${num}`)

---------------------------

Mas se eu quiser acrescentar um elemento e que o próprio JS decida onde vai posiciona-lo, eu uso o .push()

let num = [3, 5, 9, 6]

num.push(7)

console.log(`Nosso vetor é o ${num}`)


Nesse caso, o JS vai adicionar o elemento de key 4 e value 7

---------------------------

Para saber o comprimento de um vetor, devo usar o lenght:


let num = [3, 5, 9, 6, 7]

num.lenght

console.log(`Nosso vetor é o ${num}`)

--------------------------------- 
Se eu usar o .sort(), o JS organiza o vetor em ordem crescente

let num = [3, 5, 9, 6, 7]

num.sort()

console.log(`Nosso vetor é o ${num.sort()}`)

*/

/*var valores = [8, 9, 5, 7 ,1 , 3 , 5, 2 , 4]

for (var pos=0; pos < valores.length; pos++  ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

    Essa maenira é mais antiga e menos utilizada

*/

/* A maneira mais recente é muito mais simplificada, funciona assim:*/


/* 

var valores = [8, 9, 5, 7 ,1 , 3 , 5, 2 , 4]
valores.sort()

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

var valores = [8, 9, 5, 7 ,1 , 3 , 5, 2 , 4]
var pos = valores.indexOf(1)

console.log(`O valor 1 está na posição ${pos}`)