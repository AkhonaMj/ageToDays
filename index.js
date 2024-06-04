input = document.querySelector("input")
button = document.querySelector("button")
span = document.querySelector("span")


button.addEventListener("click", ageToDays)


function ageToDays(){
    span.innerHTML = input.value * 365
}
//console.log(ageToDays());

