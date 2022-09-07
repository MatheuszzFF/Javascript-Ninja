// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma++; // a mesma coisa que soma = soma + 1

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3; //exatamente a mesma coisa que soma = *soma  3

// Qual é o valor da variável `soma` até aqui?

//72.

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

var comida = ["arroz","feijão", "ovo"]; // -> sem o valor em string, procurou alguma variavel com o nome de arroz.

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

comida[1]; // chame a variavel comida -> retorna o array -> chame o indice 1

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

soma === myvar; // retorna false

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

myvar <= soma; // retornar um valor booleano depois que a comparação é feita, recebendo true por myvar ser igual a 10 e soma ser igual a 72.

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(x,y) {
    var resultado = x / y;
    return resultado;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.

//divisao(10,2);

console.log(divisao(10,2));


/* CASE SENSITIVE 

Javascript diferencia letras maiusculas de letras minusculas


LITERAIS

literais são dados que retornam eles mesmos, já exitem dentro da linguagem javascript, como {

    12 true     {a: 1}
    1.2         null    
    'ninja'     [1,2]
    "ninja"
}

IDENTIFICADORES 

podem iniciar com _ $
qualquer letra de a até z ou A até Z
digitos de 0 a 9


*/