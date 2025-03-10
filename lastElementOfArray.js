function last(arr, n) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    if (n === undefined) return arr[arr.length - 1];
    if (n <= 0) return [];
    return arr.slice(-n);
}

// Test Data
console.log(last([7, 9, 0, -2]));       // Output: -2
console.log(last([], 3));               // Output: []
console.log(last([7, 9, 0, -2], 3));    // Output: [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));    // Output: [7, 9, 0, -2]
console.log(last([7, 9, 0, -2], -3));   // Output: []
