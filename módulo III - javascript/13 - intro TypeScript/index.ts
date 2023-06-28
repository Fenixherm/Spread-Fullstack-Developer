const input = document.getElementById('input') as HTMLInputElement; 
//como esse elemento começa como nulo, ele não consegue atribuir esse tipo a variável
//ou seja tu precisa usar "as" para definir o retorno.

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//generic types
// T é usado para quando tu não sabe o tipo que você quer.
function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceALista([1,2,3], 'd'); 
//Ele identifica quando um tipo não corresponde ao outro, sem precisar de verificações.


