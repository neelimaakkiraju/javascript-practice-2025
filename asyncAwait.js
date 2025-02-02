
const objData = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const resultData = await response.json()
    console.log(resultData)
}
objData()


async function getData(){
    
}