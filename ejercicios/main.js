let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function (e){
    e.preventDefault();
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    modal.classList.toggle("modal-close");
});

const defaulBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
function defaulBtnActive() {
    defaulBtn.click();
}