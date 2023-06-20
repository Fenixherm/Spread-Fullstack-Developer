/* Multiplicando usando objeto e this */
const vetor = [1, 2];

const num3 = {
    value: 3,
}

//thisArg serve para tu passar um objeto.
function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log(mapComThis(vetor, num3));

/* Sem this e com arrow function */


function mapSemThis(arr){
    return arr.map(number => {return number * 2});
}

console.log(mapSemThis(vetor));

/* sem arrow function*/

function semArrow(arr) {
    return arr.map(function(item){
        return item * 4;
    });
}

console.log(semArrow(vetor));