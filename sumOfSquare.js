const myArray = [0,1,2,3,4]
var sum = 0

const result = myArray.map((elem,index)=>{
   return sum += Math.pow(elem,2)
})

console.log(sum)
