const arr = [1, 2, 3, 4, 5]

// const resultArr = arr.filter((index)=>(index  % 2 == 0))
// console.log(resultArr);

// function fn(i){
// return i * 2
// }

const newArr = arr.map(function(fn){ //by normal fun
    return fn * 2
})
// const newArr = arr.map((ele)=> ele * 2) -- by arrow fn
console.log(newArr);


//Filter

const input = [1, 2, 3, 4, 5]

const resultArr = input.filter((index)=>(index  % 2 == 0))
console.log(resultArr);
