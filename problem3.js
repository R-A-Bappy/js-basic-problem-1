const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

let freArr = [];

for (let i = 0; i <= 9; i++) {
    freArr[i] = 0;
}

for (let i = 0; i < inputArr.length; i++) {
    freArr[inputArr[i]] += 1;
}

let mostFre = 0;

for (let i = 0; i <= 9; i++) {
    if (mostFre < freArr[i])
        mostFre = i;
}

console.log(mostFre);
