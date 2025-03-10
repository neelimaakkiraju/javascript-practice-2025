function findMostFrequent(arr) {
    let frequencyMap = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    let mostFrequentItem = Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1])[0]; // Sort in descending order and take the first element

    return `${mostFrequentItem[0]} (${mostFrequentItem[1]} times)`;
}

// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Output result
console.log(findMostFrequent(arr1));
