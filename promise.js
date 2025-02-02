// const promise = new Promise((resolve,reject)=>{
//    const isResolve = false
//     if(isResolve){
//          console.log(resolve("promise resolved"))
//     }else{
//         console.log(reject("error"))
//     }
// })
// promise.then(result =>
//     console.log(result)
// ).catch(()=>{
//     console.log('error!')
// })


const greet = () => {
     new Promise((resolve,reject)=>{
        console.log("Resolved")
        resolve("Hello World")
     })
}

greet().then(data=> console.log(data))