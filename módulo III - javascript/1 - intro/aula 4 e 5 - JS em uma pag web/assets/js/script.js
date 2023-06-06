let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0
const btn1 = document.getElementsByTagName('button')[0]
const btn2 = document.getElementsByTagName('button')[1]


btn1.addEventListener('click', function(){
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber
    }
    mudaCor()
})

btn2.addEventListener('click', function(){
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1
        currentNumberWrapper.innerHTML = currentNumber
    }
    mudaCor()
})

function mudaCor() {
    if (currentNumber === 0) {
        currentNumberWrapper.style.color = 'white'
    } else if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'aquamarine'
    } else {
        currentNumberWrapper.style.color = 'red'
    }
}




/*
let texto = document.getElementById('texto')[0]
let btnTodo = document.getElementsByClassName('btnTodo')[0]

btnTodo.addEventListener('click', function(){

})
*/