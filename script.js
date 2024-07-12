function secondHighest(arr) {
    // If the array length is less than 2, return -Infinity
    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;
    let uniqueValues = new Set();

    for (let i = 0; i < arr.length; i++) {
        uniqueValues.add(arr[i]);
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    // If there is only one unique value in the array, return -Infinity
    if (uniqueValues.size < 2) {
        return -Infinity;
    }

    return second;
}
