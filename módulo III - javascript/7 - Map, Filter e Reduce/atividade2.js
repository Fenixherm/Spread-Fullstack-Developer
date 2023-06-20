/* Criar uma função que retorna numeros pares utilizando o filter */
function pares(arr){
    return arr.filter(par => {return par % 2 === 0;});
}

const numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(pares(numeros));


/* usando callback fora da função filtrar */
function filtraImpares(arr) {
    return arr.filter(callback);
}

function callback(par){
    return par % 2 !== 0;
}

console.log(filtraImpares(numeros));