// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8


let arr = ["A", "Good", "Problem"];

let res= arr.map(function(el){
  return el.length
}).filter(function(el){
  return el%2==1
}).reduce(function(sum,el){
  return sum+el
})
console.log(res)