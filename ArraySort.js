var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2,2,5,5,6,1,1 ]

const result = arr1.sort((a,b)=> a-b)

console.log(result)



//Remove duplicates

const result1 = arr1.filter((element,index)=> arr1.indexOf(element)===index)
console.log(result1)