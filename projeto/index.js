console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const { produtos } = db


//Exercício 1 (Listar no console a tabela em ordem crescente de preço)
console.table(produtos)

function ordenarPreco(a, b) {
  return a.preco - b.preco
}
produtos.sort(ordenarPreco)

console.table(produtos)


//Exercício 2 (receber as entradas id e quantidade)
const readline = require('readline-sync')
const listaDeCompras = []
const listaSubTotais = []
const quantidade = []

function comprar() {
  const entrarId = parseFloat(readline.question("Qual o ID do produto?"))
  const entrarQuantidade = parseFloat(readline.question("Qual a quantidade  que deseja comprar? "))


  function procurar(produto) {
    return produto.id === entrarId
  }

  const produtoEncontrado = produtos.find(procurar)
  //console.log(produtoEncontrado)

  listaDeCompras.push(produtoEncontrado)
  listaDeCompras.push(entrarQuantidade)

  const subTotal = produtoEncontrado.preco * entrarQuantidade
  // console.log(subTotal)

  listaSubTotais.push(subTotal)
  quantidade.push(entrarQuantidade)
}


let continuarComprando = "S"

while (continuarComprando === "S") {
  comprar()
  continuarComprando = (readline.question("Você deseja continuar comprando? (S/N)"))

}

console.table(listaDeCompras)

function somarTodos(acumulador, subTotal) {
  return acumulador + subTotal
}
const somaSubtotais = listaSubTotais.reduce(somarTodos, 0)

const somaSubtotaisReais = somaSubtotais.toFixed(2)

console.log(`Subtotal: R$ ${somaSubtotaisReais}`)


// 3. Perguntar se possui cupom de desconto
const cupomDesconto = parseFloat(readline.question("Possui cupom de desconto?"))
console.log(`Cupom: ${cupomDesconto}`)
if (cupomDesconto === 10) {
  const desconto = somaSubtotais * 0.1
  const descontoReais = desconto.toFixed(2)

  console.log(`Desconto: R$ ${descontoReais}`)

  const valorTotal = somaSubtotais - desconto
  const valorTotalReais = valorTotal.toFixed(2)

  console.log(`Valor total da compra: R$ ${valorTotalReais}`)
} else {
  console.log("Cupom inválido")
}


const hoje = new Date()
const data = hoje.toLocaleDateString("pt-BR")


// 4. Criação de uma classe chamada Pedido

const arrayReduzido = quantidade.reduce((acumulador,qtdTotal) => acumulador + qtdTotal, 0)

class Pedido {
  constructor(arrayReduzido, valorDoCupom, dataDoPedido) {
    this.qtdItens = arrayReduzido
    this.cupom = valorDoCupom
    this.data = dataDoPedido
  
    
  }
}
const sacola = new Pedido (arrayReduzido, cupomDesconto, data)

console.table({sacola})