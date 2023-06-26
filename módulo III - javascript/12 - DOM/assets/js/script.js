const botao = document.getElementsByClassName("btn-dark")[0];
const body = document.getElementsByTagName("body")[0];
let titulo = document.getElementsByClassName("titulo")[0];


botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    titulo.classList.toggle("titulo-branco");

    if(titulo.textContent !== "Light Mode: OFF"){
        titulo.textContent = "Light Mode: OFF";
    }else if(titulo.textContent === "Light Mode: OFF"){
        titulo.textContent = "Light Mode: ON";
    }
});