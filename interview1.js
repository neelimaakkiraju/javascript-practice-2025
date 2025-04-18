function findLargestNum(arr){
    let largest = -Infinity;
    let secondLargestNum = -Infinity
    for(let i= 0; i<arr.length;i++){
        let num = arr[i];
        if(num>largest){
            secondLargestNum = largest;
            largest = num;
        }else if(num>secondLargestNum && num<largest){
            secondLargestNum = num
        }
    }
    if(secondLargestNum === -Infinity){
        return null
    }
    return secondLargestNum
}

console.log(findLargestNum([1,2,3,4,5,6,7]))