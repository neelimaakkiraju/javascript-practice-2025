const Arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]

const result = Arr.sort((a,b)=>a-b)
console.log(result.reverse().join(","))




const Arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]

const result2 = Arr.sort((a,b)=>a-b).join(",")
console.log(result2)