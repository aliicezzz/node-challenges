//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const prompt = require("prompt-sync")();

function mediaBimestre (primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre){
    const resultado = (parseInt(primeiroBimestre) + parseInt(segundoBimestre) + parseInt(terceiroBimestre) + parseInt(quartoBimestre)) / 4;
    console.log(resultado)
}

const primeiroBimestre = prompt("Digite a nota do seu primeiro bimestre: ")
const segundoBimestre = prompt("Digite a nota do seu segundo bimestre: ")
const terceiroBimestre = prompt("Digite a nota do seu terceiro bimestre: ")
const quartoBimestre = prompt("Digite a nota do seu quarto bimestre: ")

mediaBimestre(primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre)