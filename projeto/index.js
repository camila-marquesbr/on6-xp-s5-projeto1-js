console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

//Exercício 1

console.table(db)

//Exercício 2

const readline = require('readline-sync')
const inputId = parseFloat(readline.question("Qual o ID do produto?"))
const inputQuantidade = parseFloat(readline.question("Qual a quantidade? "))