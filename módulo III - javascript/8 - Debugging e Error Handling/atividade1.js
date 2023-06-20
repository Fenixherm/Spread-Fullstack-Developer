/*
function somaTudo(arr, num){
    if(!arr || !num) throw new ReferenceError("Valor de parâmetro inválido");
    if(typeof num !== 'object') throw new TypeError("Isso não é um objeto");
    if(typeof num !== 'number') throw new TypeError("Isso não é um número");
    if(arr.length !== num) throw new RangeError ("Tamanho de vetor incorreto");
    
    return arr;
}
*/

const vetor = [1, 2, 3, 4];
const number = 4;

//somaTudo(vetor, number);


function meuErro2(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Valor de parâmetro inválido");
        if(typeof arr !== 'object') throw new TypeError("Isso não é um objeto");
        if(typeof num !== 'number') throw new TypeError("Isso não é um número");
        if(arr.length !== num) throw new RangeError ("Tamanho de vetor incorreto");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("ReferenceError:");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("TypeError:");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("RangeError:");
            console.log(e.message);
        }else{
            console.log("Erro não esperado: " + e);
        }
    }
}

console.log(meuErro2(vetor, number));