/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Matheus', 'Felix', 'Front-End', false, true, null]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr)[0]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoItems(arg1,arg2) {
    return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [
    null,
    1,
    "olá",
    { prop: "dentro do objeto"},
    [0,9,7,5,3,1]
]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(arr2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(bookName) {
    var books = {
        "Ladrão de Raios": {
            quantidadePaginas: 250,
            autor: 'Rick Riordan',
            editora: "Intríseca"
        },
        "Instrumentos Mortais": {
            quantidadePaginas: 450,
            autor: 'Cassandra Clare',
            editora: "Editora X"
        },
        "Mobby Dick": {
            quantidadePaginas: 950,
            autor: 'Cassandro Claro',
            editora: "Editora Y"
        }
    }

    return bookName ? books[bookName] :  books;
    
}
console.log(book("Ladrão de Raios"));
console.log('teste');
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var mobbyDick = book("Mobby Dick")
console.log(`O livro Mobby Dick tem ${mobbyDick.quantidadePaginas} páginas`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O livro Mobby Dick tem ${mobbyDick.autor} páginas`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
