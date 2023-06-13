function verificaPalindromo(palavra) {
    if(!palavra) return "Defina a palavra"
    
    palavra = palavra.replace(/ /g, '')
    let palindromo = palavra.split("").reverse().join("")

    if(palavra !== palindromo){
        return false
    }
 
    return true
}

function solucao1Aula (palavra){
    if(!palavra) return "Defina a palavra"

    return palavra.split("").reverse().join("") === palavra;
}

function solucao2 (palavra) {
    if(!palavra) return "Defina a palavra"

    palavra = palavra.replace(/ /g, '')
    let palindromo = palavra.split("").reverse().join("")

    for(let i = 0; i < palavra.length; i++){
        if(palindromo[i] !== palavra[i]) return false
    }
    
    return true
}

/*
solução 2
 fazer duas checagem por loop ou seja divide por 2 o length
 nesse caso pegamos o length - 1 (para pegar o índice correto, pois começa do zero)
 e tiramos -i, pois a cada loop ele precisa verificar o anterior

 omo
 012
 abba
 0123
*/

function solucao2Aula (palavra) {
    if(!palavra) return "Defina a palavra"

    for(let i = 0; i < palavra.length / 2; i++){
        if(palavra[i] !== palavra[palavra.length -1 - i]){
            return false
        }
    }

    return true
}

console.log(solucao2Aula("arara"))