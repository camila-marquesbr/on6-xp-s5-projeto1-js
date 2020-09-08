console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

//Exercício 1
const listarTabela= []

function adicionaProduto(db){
    return listarTabela.push(db);
}

console.log(db, 'Seu carrinho está vazio!')
adicionaProduto(db[0]);
adicionaProduto(db[1]);
adicionaProduto(db[2]);
adicionaProduto(db[3]);
adicionaProduto(db[4]);
adicionaProduto(db[5]);
adicionaProduto(db[6]);
adicionaProduto(db[7]);
console.log(listarTabela, 'Produtos adicionados');