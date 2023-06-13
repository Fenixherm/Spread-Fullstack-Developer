function verificaPalindromo(palavra) {
    if(!palavra) return "Defina a palavra"
    
    palavra = palavra.replace(/ /g, '')
    let palindromo = palavra.split("").reverse().join("")

    if(palavra !== palindromo){
        return "Não é um palíndromo"
    }
 
    return "É um palíndromo"
}

console.log(verificaPalindromo("araro"))