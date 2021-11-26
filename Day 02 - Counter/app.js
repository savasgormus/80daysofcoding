const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const number = document.getElementById("number");

decrease.addEventListener("click", () => {
    number.innerText = Number(number.innerText) - 1
})

increase.addEventListener("click", () => {
    number.innerText = Number(number.innerText) + 1
})

reset.addEventListener("click", () => {
    number.innerText = 0
})