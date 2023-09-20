const h2 = document.querySelector("h2")

h2.style.color = "blue"
h2.style.fontSize = "40px"

const button = document.querySelector("button")

button.style.background = "red"
button.style.color = "white"



const userNameInput = document.querySelector("#login-usuario")
userNameInput.classList.add("correct")

const errorMessage = document.querySelectorAll(".error-text")//[1] pode ser aqui tbm
errorMessage[1].classList.add("visible")

const userSenhaInput = document.querySelector("#login-senha")
userSenhaInput.classList.add("error")

