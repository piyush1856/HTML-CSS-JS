// reduce
// whenever you want to reduce something into single value you can use it

let nums = [3,5,7,8]

let res = nums.reduce(function(accumulator,el,i,array){
  // accumulator is in addition of parameter of map, forEach, filter
  // it helps in reducing value
  // 0 -> 0+3
  // 3->3+5
  // 8->8+7
  // 15->15+8=23

  return accumulator+el
})

console.log(res)

// case1: no initial value of accumulator - it will take initial value of Array (nums[0])
// case2: with initial value


// case2


let nums1 = [3,5,7,8]
// let accumulator =5 -- don't write initial value at this place

let sum=function(accumulator,el,i,array){
return accumulator+el
}
let res1 = nums1.reduce(sum,5)
console.log(res1)

// initial value will be second parameter in reduce function not in function inside reduce