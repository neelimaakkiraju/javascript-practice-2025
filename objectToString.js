const car = {type:"Fiat", model:"500", color:"white"};
console.log(typeof car)

let result = JSON.stringify(car)
console.log(typeof result)

let result2 = car.toString()
console.log(typeof result2)