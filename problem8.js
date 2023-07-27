function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return ("Array must contain at least two elements.");
    }

    let smallest = 99999;
    let secondSmallest = 99999;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("No second smallest element found.");
    }

    return secondSmallest;
}

const numbers = [12, 5, 1, 8, 20, 15];
console.log(findSecondSmallest(numbers));
