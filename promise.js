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


const  login = () => {
    return(
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("please login")
                resolve("login successful")
            })

        })
    )
}




login().then((data)=>{console.log(data)})