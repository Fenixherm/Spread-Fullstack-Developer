const pessoa = {
    firstName: "Guilherme",
    lastName: "Silva",
    id      : 1,
    fullName: function() {
        return this.firstName + " " + this.lastName
    },
    getId   : function() {
        return this.id;
    },
};

console.log(pessoa.fullName())

//console.log(pessoa.getId())

//invocando uma função que possui this e usando call para passar o objeto como parâmetro
getSomething.call(pessoa)

function getSomething() {
    console.log(this.id)
}

/* outros usos de call=> calculando valores dentro de um objeto */

const objNumeros = {
    num1: 1,
    num2: 6,
};

function soma10(a = 10){
    console.log(this.num1 + this.num2 + a)
}

soma10.call(objNumeros, 10)