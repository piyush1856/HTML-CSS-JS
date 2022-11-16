let arr =[1,2,3,4]

//method-1

// let res =arr.filter(function(el){
//   return el%2==1
// })

// let out=res.reduce(function(acc,el){
//   return acc+el
// })
// console.log(out)



// method-2

// let res =arr.filter(function(el){
//   return el%2==1
// }).reduce(function(acc,el){
//   return acc+el
// })
// console.log(res)


// method -3


let isOdd=function(el){
  return el%2==1
}

let sum =function(acc,el){
  return acc+el
}

let res=arr.filter(isOdd).reduce(sum)

console.log(res)