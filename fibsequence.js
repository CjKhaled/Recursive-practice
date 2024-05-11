// Iterative version
function fibs(length) {
    const result = [0, 1]; // Default start of sequence
    for (let i = 0; i < length - 2; i++) { // Removing two because we have defaults
        // Getting the next number by adding the index two spaces and one space before it
        result.push(result[result.length - 1] + result[result.length - 2])
    }
    // returning the final result
    return result
}

// Recursive version

function fibsRec(length) {
    // Base case
    if (length === 0) {
        return []
    }

    if (length === 1) {
        return [0]
    }

    if (length === 2) {
        return [0, 1]
    }
    // First, our base case gives us the default of [0, 1]
    // While rewinding, we add the numbers two spaces and one space behind the one we are on
    return [...fibsRec(length - 1), fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3]]
}