let person = {
    name: 'Júlia',
    age: 20,
    adress: {
        street: 'Rua 10',
        number: 8
    },
}

//1 forma de adicionar chaves e valores
person.houseColor = 'Red'

//outra forma de adicionar chaves e valores
person["numberOfneighbors"] = 9

console.log(person)

//E como eu faria para adicionar uma variável dentro do meu objeto?

let mom = "nameOfMom"

//Nesse caso, a chave tem o nome do valor da variável => "nameOfMom" 
//E é atribuído o valor "Maria" para dentro dessa chave.
person[mom] = "Maria"

console.log(person)