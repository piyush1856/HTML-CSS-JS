 let num=[1,2,3,4,5,6];

let fill = num.filter(function(el){
  return el%3==0
})
let res=fill.map(function(el){
  return el*el*el
})


let sum=function(accumulator,el,i,array){
return accumulator+el
}
let res1 = res.reduce(sum)
console.log(res1)