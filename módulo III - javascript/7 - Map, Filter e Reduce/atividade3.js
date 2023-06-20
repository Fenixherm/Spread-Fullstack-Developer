/* Criar uma função que recebe um vetor e retorna a soma desse vetor */
const arr = [4,2,3,1];
const intialvalue = 0;

function soma(arr){
    return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, intialvalue);
}
 
console.log('Soma: ' + soma(arr));

//initial value passa o valor para inicial ao acumulador
//valorAtual recebe o valor do array

/* Parte 2 */

const prices = [10.5, 5.5, 3, 4.0, 10, 2]
const saldoDisponivel = 50;

function saldoFinal(arr, saldo){
    return arr.reduce((acumulador, valorAtual) => acumulador - valorAtual, saldo);
}
 
console.log('Saldo Final: ' + saldoFinal(prices, saldoDisponivel));