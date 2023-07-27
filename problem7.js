function romanToInt(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];
        const nextSymbol = roman[i + 1];
        const nextValue = romanNumerals[nextSymbol];

        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}


console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV")); 
