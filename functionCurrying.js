function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6


//ternary oparator

var myVal = 20

console.log(myVal >10 ? true : false)