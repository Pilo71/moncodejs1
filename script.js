const form = document.querySelector("#envoyer");
const firstname = document.querySelector("#first-name");
const lastname = document.querySelector("#last-name");
const message = document.querySelector("#message");
document.getElementById("envoyer").addEventListener("submit" ,function (e) {
    e.preventDefault()
alert('formulaire envoyé') ;   
})