// Implement the myMap, myFilter, and myReduce functions

// myMap function
export function myMap(array, callback){
      return array.map(callback)
}

// myFilter function

export function myFilter(array, callback){
      return array.filter(callback)
}

// myReduce function

export function myReduce(array,callback,initVal){
    return initVal !== undefined?
    array.reduce(callback,initVal):
    array.reduce(callback)
}

