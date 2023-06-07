//asynchronous programming 

// console.log("Start");
// setTimeout(function () {
//     console.log("This will appear after 3 seconds");
// }, 3000)
// console.log("End");

/*function Invite(name, callback){
    console.log("Hello " + name +", you're invited");
    if (typeof callback === "function"){
        callback();
    }
    
}
function nextStep(){
    console.log("Please Proceed to the next page clicking on the enter button");
}

Invite ("Nirajan", nextStep); */


function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}
let a = 15;
let b = 20;
function sum (){
    console.log("This is the sum of a and b");
}
add(a, b, sum);
let c =1234;
function sum1(){
    console.log("This is the sum of b and c")
}
add(b, c, sum1);

add(a,c, function (){
    console.log("This multiplication of a and c is ", a * b); //yeslai chai anonomous function vanxa
})
