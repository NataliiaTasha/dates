const currentDate = new Date();
let userDate;
// const startDate = new Date('1975, 2, 11');
// const difference = Math.floor((currentDate.getTime() - startDate.getTime()) / 86400000);
// console.log(difference);


function getUserDate() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    userDate = new Date(`${year}, ${month}, ${day}`);
    // console.log (userDate);
}

function daysPassed() {
    const difference = Math.floor((currentDate.getTime() - userDate.getTime()) / 86400000);
    document.getElementById("message").innerHTML = `${difference} days have passed from your birth`;

}

const button = document.getElementById("confirm");
button.addEventListener("click", function() {
    getUserDate();
    daysPassed();
})