// function fun(n){
//     let result = n+(n+1)
//     return result
// }
// let sum = fun(10)
// console.log(sum);


// function add(n){
//     let result = 0
//     for (let i = 1; i <= n; i++) {
//         result = result + i;
       
        
//     }
//     return result
// }
// let res = add(10)
// console.log(res);

//file reading //file system
// const fs = require('fs'); //external library

// const comment = fs.readFileSync('a.txt', 'utf8');//read the file properly
// console.log(comment);

//  function subtract(a,b,c){
//     return (a - b + c)
//  }
//  const result = subtract(7,5,8)
//  console.log(result);

 function processUserInput(cb) {
  const name = "Tukai";
  cb(name);
}

function a(name) {
  console.log("Hello " + name);
}
processUserInput(a);

//*// important notes-- cpu intensive task is mostly important task when its running then all are pending on this time