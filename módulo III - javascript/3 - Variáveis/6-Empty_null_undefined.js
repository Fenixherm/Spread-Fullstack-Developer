abacaxi

console.log(typeof abacaxi) //undefined - retorna abacaxi is not defined

let abacate = "" //empty

console.log(typeof abacate) //string porém vazia

let arroz = null // -> num é nem true e nem false, pois é nulo


console.log(arroz) //nulo propositalmente

console.log(arroz === false) //false
console.log(arroz === true) //false

//falsy é tratado como false, mas não é a mesma coisa
//Se tu precisa checar se uma variável não é nula
//!true => pode ser null, undefined ou false.