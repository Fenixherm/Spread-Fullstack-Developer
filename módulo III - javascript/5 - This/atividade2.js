function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
    nome: 'Guilherme',
    idade: 25,
}

const pessoa2 = {
    nome: 'João',
    idade: 24,
}

console.log(calculaIdade.call(pessoa, 10))
console.log(calculaIdade.apply(pessoa2,[5]))