//Função que recebe um array.
function retornaValoresPar(array) {
	let parNums= [];
	//percorre todo o array que foi passado.
	for (let i = 0; i < array.length; i++){
		//verifica se o valor dentro do array na posição i
		//se dividido por 2 o resto é zero
		if(array[i] % 2 === 0){
			//se sim, cria uma posição no indice i.
			parNums.push(array[i]);
		}else {
			//Caso seja falso, mostra um console.
			console.log(`${array[i]} não é par!`);
		}
	}
	//Mostra todos os números do array.
	console.log('Os números ' + parNums + ' são pares');
}

//declaração do array.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Invoca a função passando o array.
retornaValoresPar(array);