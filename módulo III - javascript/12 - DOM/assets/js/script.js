const botao = document.getElementsByClassName("btn-dark")[0];
const body = document.getElementsByClassName("corpo")[0];
let titulo = document.getElementsByClassName("titulo")[0];
let texto = document.getElementsByClassName("titulo")[0];


botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    titulo.classList.toggle("titulo-branco");

    if(texto.textContent === ""){
        texto.textContent = "Light Mode: OFF";
    }else if(texto.textContent === "Light Mode: OFF"){
        texto.textContent = "Light Mode: ON";
    }else{
        texto.textContent = "Light Mode: OFF";
    }
});