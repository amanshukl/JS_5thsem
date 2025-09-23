function h1(){
    console.log("From the function with 'function keyword'");

}
f1();

functionAsexpression();
const functionAsexpression = function(){
    console.log("From the function with 'function expression'");
}
functionAsexpression();


arrowfunction();
const arrowfunction = () =>{
    console.log("From the function with 'arrow function'");
}
arrowfunction();