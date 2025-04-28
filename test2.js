// function restoreLibrary(books, threshold, transformations) {
//     // Handle case where transformations might be undefined
//     transformations = transformations || [];
    
//     // Process books by applying transformations to their energy
//     const processedBooks = books.map(function(book) {
//         var newBook = { title: book.title };
//         newBook.energy = transformations.reduce(function(currentEnergy, transform) {
//             return transform(currentEnergy);
//         }, book.energy);
//         return newBook;
//     });
    
//     // Categorize books without spread operator
//     return {
//         highEnergy: processedBooks.filter(function(book) { 
//             return book.energy >= threshold; 
//         }),
//         lowEnergy: processedBooks.filter(function(book) { 
//             return book.energy < threshold; 
//         })
//     };
// }

// // Test Case 1 (Original Example)
// console.log(JSON.stringify(restoreLibrary(
//     [{ "title": "Spellbook", "energy": 50 }],
//     10,
//     [function(energy) { return energy + 10; }]
// ), null, 2));

// // Test Case 2
// console.log(JSON.stringify(restoreLibrary(
//     [
//         { title: 'Scroll of Fire', energy: 80 },
//         { title: 'Ice Tome', energy: 30 }
//     ],
//     50,
//     [function(energy) { return energy + 10; }]
// ), null, 2));

// // Test Case 3 (No transformations)
// console.log(JSON.stringify(restoreLibrary(
//     [{ title: 'Ancient Codex', energy: 120 }],
//     100,
//     [] // No transformations
// ), null, 2));
function restoreLibrary(books, threshold, transformations = []) {
    // If no transformations provided, use an identity function to handle cases with no transformations
    const safeTransformations = transformations.length > 0 ? transformations : [energy => energy];
    
    const processedBooks = books.map(book => ({
        ...book,
        energy: safeTransformations.reduce((energy, transform) => transform(energy), book.energy)
    }));
    
    return {
        highEnergy: processedBooks.filter(book => book.energy >= threshold),
        lowEnergy: processedBooks.filter(book => book.energy < threshold)
    };
}

// Test Case 1 (Original Example)
// const test1 = restoreLibrary(
//     [{ "title": "Spellbook", "energy": 50 }],
//     10,
//     [energy => energy + 10]
// );
// console.log("Test 1:", JSON.stringify(test1, null, 2));

// // Test Case 2 (From your new image)
// const test2 = restoreLibrary(
//     [
//         { title: 'Scroll of Fire', energy: 80 },
//         { title: 'Ice Tome', energy: 30 }
//     ],
//     50,
//     [energy => energy + 10]
// );
// console.log("Test 2:", JSON.stringify(test2, null, 2));

// // Test Case 3 (From your new image)
// const test3 = restoreLibrary(
//     [{ title: 'Ancient Codex', energy: 120 }],
//     100,
//     [] // No transformations
// );
// console.log("Test 3:", JSON.stringify(test3, null, 2));