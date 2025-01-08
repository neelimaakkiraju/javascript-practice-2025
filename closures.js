function fun1(){
   const name = "neelima"
   function fun2(){
    const name2 = "akkiraju"
    console.log(name)
   }
   return fun2
}
const result = fun1()
result()