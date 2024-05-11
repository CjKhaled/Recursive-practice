function mergeSort(array) {
    // we return an array with one element, since it's sorted
    if (array.length === 1) {
        return array
    }

    // we will split our arrays by halves
    // always assume left is lower if odd
    const midIndex = Math.floor(array.length / 2);
    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex, array.length);

    // Sort both halves, and marge them together
    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArray, rightArray) {
    // we will merge the array by comparing the first element in each array, and putting the lower one in the result
    const result = [];
    let indexLeftArray = 0;
    let indexRightArray = 0
    while (indexLeftArray < leftArray.length && indexRightArray < rightArray.length) {
        if (leftArray[indexLeftArray] < rightArray[indexRightArray]) {
            result.push(leftArray[indexLeftArray])
            indexLeftArray++
        } else {
            result.push(rightArray[indexRightArray])
            indexRightArray++
        }
    }

    // edge cases
    while (indexLeftArray < leftArray.length) {
        result.push(leftArray[indexLeftArray])
        indexLeftArray++
    }
    
    while (indexRightArray < rightArray.length) {
        result.push(rightArray[indexRightArray])
        indexRightArray++
    }

    return result

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))