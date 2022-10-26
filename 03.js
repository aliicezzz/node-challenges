//Faça um Programa que peça dois números e imprima a soma.
const prompt = require("prompt-sync")();

function imprimeSomaDeDoisNumeros(primeiroNumero, segundoNumero){
    const resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
    console.log(resultado)
}

const numero1 = prompt("Digite seu primeiro número: ")
const numero2 = prompt("Digite seu segundo número: ")

imprimeSomaDeDoisNumeros(numero1, numero2)