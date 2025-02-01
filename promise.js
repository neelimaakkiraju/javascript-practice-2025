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
            },5000)

        })
    )
}

const signUp = ()=>{
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("please visit login")
            resolve("Existing user")
        })
    })
}


login().then(signUp)
