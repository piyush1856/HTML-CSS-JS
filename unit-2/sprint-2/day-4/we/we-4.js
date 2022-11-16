let nums1 = [1,2,3,4]


let product=function(accumulator,el,i,array){
return accumulator*el
}
let res1 = nums1.reduce(product)
console.log(res1)