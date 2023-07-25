const handleTargetValue = (arr, tarValue) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == tarValue) {
                return [i, j];
            }
        }
    }
}

const result = handleTargetValue([1, 3, 6, 8, 11, 15], 9);

console.log(result);