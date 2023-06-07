function comparation (a, b){
    //OBS.: Zero também não passa nessa verificação
    if(!a || !b) return "Defina dois números!"
    let res;
    const numeros = a + b;

    if(a === b){
        res = "Os números " + a + " e " + b + " são iguais.";
    }else {
        res = "Os números " + a + " e " + b + " não são iguais.";
    }

    if(numeros < 10){
        res += " Sua soma é " + numeros + ", que é menor que 10 e menor que 20."
    }else if(numeros === 10){
        res += " Sua soma é " + numeros + ", que é igual à 10 e menor que 20."
    }else if(numeros > 10 && numeros < 20){
        res += " Sua soma é " + numeros + ", é igual a 10 e menor que 20."
    }else if(numeros === 20){
        res += " Sua soma é " + numeros + ", que é maior à 10 e igual à 20."
    }else{
        res += " Sua soma é " + numeros + ", que é maior que 10 e maior que 20."
    }

    return res;
}

console.log(comparation(1,2))