// Mini Calculator
const numbers = document.querySelector(".btn-container");
const valuesNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const logNumbers = (event) => {
    const button = event.target;
    if(button.classList.contains('btn-items')) {
        console.log(button.textContent);
    }
}
numbers.addEventListener("click", logNumbers);