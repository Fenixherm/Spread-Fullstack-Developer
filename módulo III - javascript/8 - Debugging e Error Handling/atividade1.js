/* Minha resolução */
function somaTudo(arr, num){
    if(!arr || !num) throw new ReferenceError("Valor de parâmetro inválido");
    //if(num !== 'object') throw new TypeError("Isso não é um objeto");
    if(num !== 'number') throw new TypeError("Isso não é um número")
    if(arr.length !== num) throw new RangeError ("Tamanho de vetor incorreto");
    
    return arr;
}

function meuErro(arr, num){
    try{
        return somaTudo(arr, num);

    }
    catch(e){
        console.log(e);
    }
}

const vetor = [1, 2, 3, 4];
const number = "teste";

meuErro(vetor, number);