const form = document.querySelector("form")
const card1 = document.querySelector(".card")
const cardThankyou = document.querySelector(".card-thankyou")
const dismissButton = document.querySelector("dismiss-button")
const emailInput = document.getElementsByClassName("email-input")[0]
let emailError = document.getElementsByClassName("email-error")[0]
const thankYouMessageCustom = document.getElementById("enterdEmail")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInputs()
    prepareCustomThankyou()
})

function validateInputs() {
    if( emailInput.value && emailInput.value.includes('@') && emailInput.value !== '' && emailInput.value.trim().includes('.com'))
    {
        console.log("emailInput.valye",emailInput.value )
        card1.classList.add("hide")
        cardThankyou.classList.remove("hide")
    }
    else {
        emailError.innerHTML = "Valid email required"
    }
}

function dismiss() {
    cardThankyou.classList.add("hide")
    card1.classList.remove("hide")
}

function prepareCustomThankyou() {
    thankYouMessageCustom.innerHTML = emailInput.value
}



