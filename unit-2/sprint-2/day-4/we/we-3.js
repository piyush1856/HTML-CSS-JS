let nums=[1,2,3,4,5,6,7,8,9,10]
let fill = nums.filter(function(el){
  return el%2!==0
})
console.log(fill)