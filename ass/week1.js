// function isAnagram(str1, str2){

// }

let str1 = "aba";
let str2 = "aba";

let ans1;
let ans2;

ans1 = str1.toLowerCase().split("").sort().join("")
ans2 = str2.toLowerCase().split("").sort().join("")


if (ans1 === ans2){
    console.log("true");
    
}else{
    console.log(false);
    
}
