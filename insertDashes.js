const givenNumbers = 925468

const result = givenNumbers.toString()

const splitNum = result.split("")

const finalValue = splitNum.map((element,index)=> {
     if(element%2===0){
         return element.concat("-")
     }else{
        return element
     }
})

console.log(finalValue.join(""))