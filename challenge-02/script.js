
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function some(x,y) {
    var result = x + y;
    return result;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var result = some(3,5) + 5;

console.log(result);

// Qual o valor atualizado dessa variável

// 13.

// Declare uma nova variável, sem valor.

var noValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function giveStringAndValue(value){
    var noValue = value;
    return "O valor da variável agora é" + " " + value; 
    // `O valor da variável agora é ${value}`; 
}
console.log(giveStringAndValue(30));

// Invoque a função criada acima.

giveStringAndValue(30)

// Qual o retorno da função (Use comentários de bloco).


/* 
    a função retorna a string: "O valor da variável agora é 30"; 
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplication(a,b,c) {
    if( a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return a * b * c + 2;
    }
}

console.log(multiplication(10,30,2));

// Invoque a função criada acima, passando só dois números como argumento.

console.log(multiplication(10,30));

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).

/*
 Preencha todos os valores corretamente!
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multiplication(10,30,2));

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).

// 602;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


function threeArguments(a,b,c) {
    if (
        a !== undefined && 
        b !== undefined &&
        c !== undefined
    ) {
       return ( a + b ) / c;
    } else if (
        a !== undefined &&
        b !== undefined &&
        c == undefined
    ) {
       return a + b;
    } else if ( 
        a !== undefined &&
        b === undefined &&
        c === undefined
     ) {
       return a;
    } else if ( 
        a === undefined &&
        b === undefined &&
        c === undefined
    ) {
        return false;
    } else {
        return null;
    }
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.


console.log(threeArguments(3)); // retorna 3, valor do primeiro parametro a;

console.log(threeArguments(3, 10));

console.log(threeArguments(3, 10 ,20));

console.log(threeArguments(null));

