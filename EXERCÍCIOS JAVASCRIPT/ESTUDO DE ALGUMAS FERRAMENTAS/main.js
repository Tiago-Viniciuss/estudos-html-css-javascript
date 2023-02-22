//Nullish Coalescing Operator (OPERADORES NULOS)

/* 

Para trabalhar com valores nulos como null e undefined, devo usar ??

Pois se eu usar o ||, ele vai considerar como não definidos os diversos valores, como 0, string vazia (''), array vazia ([]), etc.

Usando o Coalescing Operator, eu sou mais acertivo no que REALMENTE é um valor nulo. EX:


const idade = 0;

document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado.')


Se eu substituir o ?? por ||, o valor de 0 aparecerám como "não informado". Mas 0 é um número inteiro, então ele precisa aparecer como resultado real. Só receberei um resultado "não informado", se o valor da idade fosse: null;

*/

// Objetos
// São estruturas de dados que a gente consegue armazenar conjunto de chave e valor

/* 
EX:

*/

const usuario = {
  nome: 'Diego',
  idade: 27,
  endereco: {  //Essa é uma chave aninhada, dentro da chave principal.
    rua: 'Rua zero',
    numero: 115,
  },
}
/* 

Com esses obejetos, eu posso trabalhar as informações e uma das formas é usando o método IN, onde eu confiro se existe tal coisa dentro do objeto em questão. EX:

document.body.innerText = ('nome' in usuario)  >> Existe nome dentro de usuário? Daí eu terei um retorno como true ou false


Também posso usar o Object.keys() para retornar todas as chaves dentro do obejto em questão. EX:


document.body.innerText = Object.keys(usuario)

Ou o Object.values() para retornar os valores, ao invés das chaves


document.body.innerText = Object.values(usuario) 

Neste caso acima, a chave aninhada saiu sem um resultado real




Outro método muito importante é a desestruturação, na qual eu removo parte do objeto para uma variável à parte

const {endereco} = usuario

document.body.innerText = JSON.stringify({endereco}) >> Agora, eu extraí as informações de dentro do objeto

*/

// A desestruturação é muito importante, pois eu posso usá-la, inclusive em funções. EX:

function mostraIdade({idade}) {
  return idade;
}

document.body.innerText = mostraIdade(usuario)

// Neste caso, eu substituí o usuario pela idade, que é um objeto dentro de usuario, usando chaves. Daí, basta que eu retorne idade; e está feito