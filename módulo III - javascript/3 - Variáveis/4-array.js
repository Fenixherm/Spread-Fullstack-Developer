let array = []

array.unshift(1)
array.unshift(0)
array.push(2)

console.log(array)

array.shift() //Apaga o zero
array.push(3)
array.pop() //apaga o três
console.log(array)

let array2 = array.pop() //elimino o 3 do array principal e coloco no array2
console.log(array2 + " e " + array)

array.push(2, 3, 4)
//Método de inverter array
array.reverse()

console.log(array)