//Minha resposta
function viraZero() {
    if(arguments.length === 0) return -1

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] === 0){
            console.log("Você ja é zero!")
        }else if(arguments[i] % 2 === 0){
            arguments[i] = 0
        }
    }
    return arguments
}

//Resposta professora
function viraZero2(array) {
    if(array.length === 0 || !array) return -1

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você ja é zero!")
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0
        }
    }
    return array
}

const num = [1, 2, 4, 5, 7, 90, -2, 99, 0]
console.log(viraZero2(num))