function secondHighest(arr) {
    // If the array length is less than 2, return -Infinity
    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    // If second is still -Infinity, it means there was no valid second highest
    if (second === -Infinity) {
        return -Infinity;
    }

    return second;
}
