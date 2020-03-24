
var inputTamanho = document.querySelector('input#tamanho');
var outputTamanho = document.querySelector('output[for="tamanho"]');


inputTamanho.oninput=function(){
    outputTamanho.value = inputTamanho.value;
}