function setTimeoutPromisified(duration) {
    return new Promise( (resolve, reject)=>{
        setTimeout(resolve,duration);
    });
}

// function callback(){
//     console.log("1 second has passed");
// }

// setTimeoutPromisified(1000).then(callback);


// function hii(){
//     console.log("Hii, after 1 sec");
    
// }
// function hello(){
//     console.log("Hello, after 3 sec");
    
// }
// function Hello(){
//     console.log("Hello there, after 5 sec");
    
// }
// setTimeout(hii,1000)
// setTimeout(hello,3000)
// setTimeout(Hello,5000)

async function solve(params) {
   await setTimeoutPromisified(1000)
    console.log("hii");
   await setTimeoutPromisified(3000)
    console.log("hello third");
    
   await setTimeoutPromisified(5000)
    console.log("hello hello");
    
}

solve()
console.log("execution complete");

