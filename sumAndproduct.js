var array = [1, 2, 3, 4, 5, 6];

let sum = 0
let product = 1

for (let i = 0;i<array.length;i+=1){
    sum+= array[i]
    product*=array[i]
}
console.log(sum,product)
console.log(product)