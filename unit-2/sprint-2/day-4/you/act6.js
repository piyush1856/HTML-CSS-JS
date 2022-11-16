// another method for map

let arr=[2,4,6,8]
let multiply = function(el){
  return el*2
}
let res =arr.map(multiply);
console.log(res)

// same method used in input taking



let nums=[3,6,8,1,9];
// output :- even 

let rest =nums.map(function(el){
  return el%2 ==0
})
console.log(rest)
// in this case we are getting boolean because el%2 is condition


// so filter will come into play

let fill = nums.filter(function(el){
  return el%2==0
})
console.log(fill)
// you will get values
// filter is returning the values where condition is true but map is only returning the condition weather true or false


// forEach, map ,filter --> same parameters (element,index, array)

