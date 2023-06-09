let nome = 'João' //string
let sobrenome = 'Vitor' //forma primitiva

let exemplo = new String("BlaBlaBla") //retorna como objeto (diferença, muito maior e mais lento)

let frase = "Olá, tudo bom?"

console.log(frase)

frase.split(" ") //assim separa por palavra

let vetorFrase = frase.split('') //assim eu consigo pegar uma frase, separar ela letra-a-letra 
 //e colocar num array

 frase = frase.replace('tudo bom', 'beleza')
// basicamente esses métodos se tu deseja que substitua tu precisa atribuir nela mesmo 
//ou se tu quiser pode atribuir a outra variável

 console.log(frase)