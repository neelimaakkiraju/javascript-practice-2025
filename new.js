console.log(a)
var a = 10;



//closures
function outer() {
     let count = 0;
     return function inner(){
        count++;
        console.log(count)
     }
}

let counter = outer()
counter()
counter()