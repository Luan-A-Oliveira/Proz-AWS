let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


// ------ VARIAVEIS------------ //

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01")
let btnRmvProduto01 = document.querySelector("#btn-subtrair-produto-01")
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")
let valorProduto = 11.66 
// ------ FUNÇÕES -------------- //


function atualizar(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

//atualiza o dom para não começar no zero
atualizar()

function adicionarUm() {
  //adiciona 1 ao input   
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1
  //adicionar 1 ao subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1  
  //adiciona o valor ao subtotal
  subtotalInfo.valor = subtotalInfo.valor + valorProduto 
  //aualiza dom
  atualizar()
}
function substrairUm() {
  //subtrai input
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1
    //subtrai subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1  
    //subtrai subtotal valor
    subtotalInfo.valor = subtotalInfo.valor - valorProduto
    //atualiza dom
    atualizar()
  }
}


// -------EVENTO --------------//


btnAddProduto01.addEventListener("click",adicionarUm)
btnRmvProduto01.addEventListener("click",substrairUm)