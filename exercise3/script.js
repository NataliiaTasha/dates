let hours;
const now = new Date();
// console.log(now);
hours = 80000;
const someWhen = now.getTime() + (hours * 60 * 60 * 1000);
console.log(someWhen);
const exactTime = new Date(someWhen.toString());
console.log(exactTime);
