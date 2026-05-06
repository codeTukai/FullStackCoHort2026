// A promise in javascript is an object that represents the eventual completion for (or failure) of an asynchronous operation and its resulting value.

// const promise = new Promise((resolve,reject)=>{
//     resolve("ok")
//     reject("no")
// })

// promise.then((res)=>(console.log(res)
// ))

// function setTimeoutPromise(ms){
//     const p = new Promise((resolve)=>(setTimeout(resolve,ms)))
//     return p;
// }

// function callback(){
//     console.log("3 seconds have passed");
    
// }

// setTimeoutPromise(3000).then(callback)
// setTimeoutPromise(4000).then(callback)


// const promise = new Promise(function(res,rej){
//      setTimeout(function () {
//         res("3 second passed")
        
//     },5000)
// })

// promise.then((result)=>(console.log(result)
// ))


// class promise{
//     constructor(){

//     }

//     run(ms){
//         return new Promise((resolve)=>{
//             setTimeout(() => {
//                 resolve(`waited ${ms} ms`)
//             }, ms);
//         })
//     }
//     printMe(){

//     }
// }

// const p = new Promise()

// p.run(3000).then(console.log()
// )

// class Timer {
//   wait(ms) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Waited ${ms} ms`);
//       }, ms);
//     });
//   }
// }

// const timer = new Timer();

// timer.wait(3000).then(console.log);

//reusable
// function promiseCallBack(resolve){
//     setTimeout(resolve, 3000)
    

// }

// function main(){
//     console.log("main is called");
    
// }

// promiseCallBack(main)


// //hardcoded
// function promiseCallBack(){
//     setTimeout(main, 3000)
    

// }

// function main(){
//     console.log("main is called");
    
// }

// promiseCallBack()


// function call(resolve){
//     setTimeout(resolve, 2000)
// }

// function callback(){
//     return new Promise(call)
// }

// function main(){
//     console.log("print me ");
    
// }

// call().then(main)


const { rejects } = require("assert");
const fs = require("fs")



function readTheFile(sendTheFinalValue){   //create the function
    fs.readFile("a.txt", "utf-8", function(err,data){
        sendTheFinalValue(data);
        // err.callback()
  
    })
}

function readFile(fileName){   //function definition 
    return new Promise(readTheFile);
}

const p = readFile();

function callback(content){  // function definition
    console.log("hii there");
   
}

p.then(callback)



