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

function compra(){
const readline = require('readline-sync')
const inputId = parseFloat(readline.question("Qual o ID do produto?"))
const inputQuantities = parseFloat(readline.question("Qual a quantidade  que deseja comprar? "))
const continuarComprando = parseFloat(readline.question("Você deseja continuar comprando? 1 para sim e 2 para não:"))

if (continuarComprando === 1){
  return compra()

  }else if (continuarComprando ===2){
    const cupomDesconto = parseInt(readline.question("Possui cumpom de desconto?"))
  if (cupomDesconto >= 15) {
    console.log("Cupom inválido")
  }else{
      console.log("Cupom válido")
   }
  }
}
console.log(compra())

//Exercício 3


function somarTodos(acumulador,products){
  return acumulador + products.preco
}
const arrayReduzido = products.reduce(somarTodos, 0)

console.log(arrayReduzido);



//function desconto{
    //if (cupomDesconto == true) {
    //    let valorDoDesconto = precoTotal * 0,1
    //   let TotalComDesconto = precoTotal - ValorDoDesconto
   // }else{
    //    console.log("Sem descontos hoje!")
  //  }
//}

