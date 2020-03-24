var inputQtd = document.querySelector('input#qtd');
var outputTotal = document.querySelector('output#total');
var preco = document.querySelector('#preco').textContent;
//substitui R$ por nada e virgula por ponto
preco = preco.replace("R$","").replace(",",".");

inputQtd.oninput = function(){
     var total = inputQtd.value * preco;
     outputTotal.value = `R$ ${total.toFixed(2).replace(".",",")}`;
}