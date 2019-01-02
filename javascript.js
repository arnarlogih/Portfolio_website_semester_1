let button1 = document.querySelector(".textcontainer")
let formWrapper = document.querySelector(".formWrapper")

button1.addEventListener("click", unfoldForm)

function unfoldForm() {
    formWrapper.classList.remove("rotated")
    formWrapper.classList.add("rotateToVisible")
}
