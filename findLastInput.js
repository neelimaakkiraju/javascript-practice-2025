

function findLastInput(Arr,Ind){
     let result = Arr.reverse()
     if(Ind){
        let output = result[Ind]
        return output
     }else{
        return result[0]
     }
     
}

console.log(findLastInput([7, 9, 0, -2]));
console.log(findLastInput([7, 9, 0, -2],3));
console.log(findLastInput([7, 9, 0, -2],2));



// var myArr = [9,8,5,6,7]

// let result = myArr.reverse()
// console.log(result[0])