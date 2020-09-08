console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const {products} = db

//Exercício 1

console.table(products)
//Exercício 2

const readline = require('readline-sync')
const inputId = parseFloat(readline.question("Qual o ID do produto?"))
const inputQuantidade = parseFloat(readline.question("Qual a quantidade? "))