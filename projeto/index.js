console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const {produtos} = db

//Exercício 1

console.table(produtos)

function ordenarPreco(a,b){
    return a.preco - b.preco
}
produtos.sort(ordenarPreco)

console.table(produtos)


//Exercício 2


const readline = require('readline-sync')
const listaDeCompras = []
const listaSubTotais = []
function comprar() {
  const entrarId = parseFloat(readline.question("Qual o ID do produto?"))
  const entrarQuantidade = parseFloat(readline.question("Qual a quantidade  que deseja comprar? "))
  
  
  function procurar(produto) {
    return produto.id === entrarId
  }

  const produtoEncontrado = produtos.find(procurar)
  //console.log(produtoEncontrado)

  listaDeCompras.push(produtoEncontrado)

  const subTotal = produtoEncontrado.preco * entrarQuantidade
 // console.log(subTotal)

  listaSubTotais.push(subTotal)
}

let continuarComprando ="S"

while (continuarComprando === "S") {
  comprar ()
  continuarComprando = (readline.question("Você deseja continuar comprando? (S/N)"))
  
}

console.table(listaDeCompras)

function somarTodos(acumulador,subTotal){
  return acumulador + subTotal
}
const somaSubtotais = listaSubTotais.reduce(somarTodos, 0)

console.log(somaSubtotais)



/*if (continuarComprando === "N") {
  codigoDeDesconto = parseInt(readline.question("Você tem cupom de desconto?"))
}else{
  return pedido()
}*/


/*if (continuarComprando === 1){
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


function somarTodos(acumulador,subTotal){
  return acumulador + subTotal
}
const arrayReduzido = listaDeSubtotais.reduce(somarTodos, 0)

console.log(arrayReduzido);*/



//function desconto{
    //if (cupomDesconto == true) {
    //    let valorDoDesconto = precoTotal * 0,1
    //   let TotalComDesconto = precoTotal - ValorDoDesconto
   // }else{
    //    console.log("Sem descontos hoje!")
  //  }
//}