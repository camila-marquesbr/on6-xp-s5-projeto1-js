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
  let entrarId = parseFloat(readline.question("Qual o ID do produto?"))

  // validando ID//
  while(entrarId <= 0 || entrarId >= 9 ){
    entrarId = parseFloat(readline.question("Digite novamente o Id..."));
  }

  let entrarQuantidade = parseFloat(readline.question("Qual a quantidade  que deseja comprar? "))
  
  //validando a Quantidade //
  while(entrarQuantidade <= 0){
    entrarQuantidade = parseFloat(readline.question("Digite a quantidade..."));
  }

  
  function procurar(produto) {
     return produto.id === entrarId
  }
  const produtoEncontrado = produtos.find(procurar)

  const produtoAdicionado = {...produtoEncontrado, quantidade: entrarQuantidade}
    
  listaDeCompras.push(produtoAdicionado)

  //console.log(produtoEncontrado)

  quantidade.push(entrarQuantidade)

  const subTotal = produtoEncontrado.preco * entrarQuantidade
  // console.log(subTotal)

  listaSubTotais.push(subTotal)
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
let cupomDesconto = parseFloat(readline.question("Possui cupom de desconto?"))

//validando cupom de desconto //
while(cupomDesconto > 15){
  cupomDesconto = parseFloat(readline.question("Digite um cupom válido..."));
}

console.log(`Cupom: ${cupomDesconto}`)

  const desconto = somaSubtotais * (cupomDesconto/100)
  const descontoReais = desconto.toFixed(2)

  console.log(`Desconto: R$ ${descontoReais}`)

  const valorTotal = somaSubtotais - desconto
  const valorTotalReais = valorTotal.toFixed(2)

  console.log(`Valor total da compra: R$ ${valorTotalReais}`)



const hoje = new Date()
const data1 = hoje.toLocaleDateString("pt-BR")


// 4. Criação de uma classe chamada Pedido

const arrayReduzido = quantidade.reduce((acumulador,qtdTotal) => acumulador + qtdTotal, 0)

class Pedido {
  constructor(arrayReduzido, valorDoCupom, dataDoPedido, listaDeProdutos, valorSubtotal, valorDesconto, valorTotal) {
    this.qtdItens = arrayReduzido
    this.cupom = valorDoCupom
    this.data = dataDoPedido
    this.compra = listaDeProdutos
    this.valorSubtotal = valorSubtotal
    this.desconto1 = valorDesconto
    this.total = valorTotal
    
  }
}

const sacola = new Pedido (arrayReduzido, cupomDesconto, data1, listaDeCompras, somaSubtotaisReais, descontoReais, valorTotalReais)
const { qtdItens, cupom, data, compra, valorSubtotal, desconto1, total} = sacola
console.table("Produtos adquiridos")
console.table(sacola.compra)
console.table("Informações da compra")
console.table({qtdItens, cupom, data, valorSubtotal, desconto1, total})


//const produtoAdicionado = {...produtoAdquirido, quantidade: quantidadeDeProduto}
    
//listaDeCompras.push(produtoAdicionado)

