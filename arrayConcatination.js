var myArr = [1,2,3]
var myArr2 = [4,5,6,7]

//method 1

let result = myArr.concat(myArr2)
console.log(result)


//method2 

let output = [...myArr,...myArr2]
console.log(output)


//mehtod3

let method3 = myArr +","+ myArr2
console.log(method3)

