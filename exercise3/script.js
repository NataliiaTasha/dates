// let hours;
// const now = new Date();
// console.log(now);
// hours = 80000;
// const someWhen = now.getTime() + (hours * 60 * 60 * 1000);
// console.log(someWhen);
// const exactTime = new Date(someWhen);
// console.log(exactTime);

const hoursInput = document.querySelector("input");
const now = new Date();
const today = document.querySelector(".today");
const inNHours = document.querySelector(".in-n-hours");

hoursInput.addEventListener("change", dates);

function dates() {
    const hours = hoursInput.value;
    const someWhen = now.getTime() + (hours * 60 * 60 * 1000);
    const exactTime = new Date(someWhen);
    today.textContent = `Today is: ${now}`;
    if (hours) {
        inNHours.textContent = `In ${hours} hours it will be: ${exactTime}`;
    }
    
}


dates();

