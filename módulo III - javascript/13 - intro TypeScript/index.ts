const input = document.getElementById('input') as HTMLInputElement; 
//como esse elemento começa como nulo, ele não consegue atribuir esse tipo a variável
//ou seja tu precisa usar "as" para definir o retorno.

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});
