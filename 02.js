//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
const prompt = require("prompt-sync")();
//importa biblioteca

function mostraNumeroInformado(numero) {
    console.log(`O número informado foi ${numero}`)
}//função que mostra o numero informado

const numero = prompt("Digite seu número: ")
mostraNumeroInformado(numero)