const notas = [14, 15, 12, 8, 6, 18, 20, 11];

let media = notas.map((media)=> media / 2);

console.log("Notas: " + notas +"\nMédias:" + media);
//Ou seja por mais que eu utilizei o método map, ele não alterou o array notas.