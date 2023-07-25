const prompt = require('prompt-sync')();

let numbers = [];
console.log("Please give me 5 numbers and every number press then must enter press: ");
for (let i = 0; i < 5; i++) {
    const inputNum = parseInt(prompt());
    numbers.push(inputNum);
}
let totalNUm = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        totalNUm += numbers[i];
    }
}

console.log(totalNUm);
