let newStr = "WriteJavaScriptProgramThatAcceptsStringAsInputAndSwapsTheCaseOfEachCharacter"

let result = newStr.split("")

let mapArr = result.map((elem,index)=>{
    return elem===elem.toUpperCase()?" "+elem:elem

    
})

console.log(mapArr.join(""))