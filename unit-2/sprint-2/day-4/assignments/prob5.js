let nums=[2,4,5,3,6,8];

let fill = nums.filter(function(el,i){
  return i%2==0
}).filter(function(el,i){
  return el%2==0
})
console.log(fill)