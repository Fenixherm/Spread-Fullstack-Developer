const botao = document.getElementsByClassName("btn-dark")[0];
const body = document.getElementById("corpo");
let titulo = document.getElementsByClassName("titulo")[0];


botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    titulo.classList.toggle("titulo-branco");
    document.getElementsByClassName("titulo")[0].textContent = "Light Mode: OFF";
});
