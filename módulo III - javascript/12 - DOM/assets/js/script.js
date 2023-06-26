/* minha solução */

const botao = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0]; //precisa do índice pois é retornado uma coleção.
const titulo = document.getElementById("titulo");
const footer = document.getElementById("text-footer");

botao.addEventListener("click", changeMode);

function changeMode(){
    changeClasses();
    changeStyle();
    changeText();
}

function changeClasses(){
    body.classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");
    titulo.classList.toggle("dark-mode");
}

function changeStyle(){
    if(footer.style.color !== "rgb(0, 0, 0)"){
        footer.style.color = "rgb(0, 0, 0)";
        footer.style.backgroundColor = "rgb(255, 228, 196)"
    }else{
        footer.style.color = "rgb(255, 255, 255)";
        footer.style.backgroundColor = "rgb(66, 66, 66)"
    }
}

function changeText(){
    if(titulo.textContent !== "Light Mode: OFF"){
        titulo.textContent = "Light Mode: OFF";
    }else{
        titulo.textContent = "Light Mode: ON";
    }

    if(botao.textContent !== "Light Mode"){
        botao.innerHTML = "Light Mode"
    }else{
        botao.innerHTML = "Dark Mode";
    }
}