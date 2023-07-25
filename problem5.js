const calculator = (num1, num2, operator) => {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "invalid operator";
    }
}

const result = calculator(10, 10, "+");
console.log(result);