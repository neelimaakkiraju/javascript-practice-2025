function greetings(name){
    console.log("hello "+ name)
}
function userName(callback){
    const name = "world"
    callback(name)

}
userName(greetings)