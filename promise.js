const promise = new Promise((resolve,reject)=>{
   const isResolve = false
    if(isResolve){
         console.log(resolve("promise resolved"))
    }else{
        console.log(reject("error"))
    }
})
promise.then(result =>
    console.log(result)
).catch(()=>{
    console.log('error!')
})