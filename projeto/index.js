console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const {products} = db

//Exercício 1

console.table(products)

function ordenarPreco(a,b){
    return a.preco - b.preco
}
products.sort(ordenarPreco)

console.table(products)

//Exercício 2

const readline = require('readline-sync')
const inputId = parseFloat(readline.question("Qual o ID do produto?"))
const inputQuantities = parseFloat(readline.question("Qual a quantidade  que deseja comprar? "))
const inputDiscount = parseFloat(readline.question("Você tem algum cupom de desconto? Se sim digite aqui:"))

//function discount{
    //if (inputDiscount == true) {
    //    let totalPriceDiscont = totalPrice * 0,1
    //   let amountPaid = totalPrice - totalPriceDiscount
   // }else{
    //    console.log("Sem descontos hoje!")
  //  }
//}
