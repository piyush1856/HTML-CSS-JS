let arr=[2,4,6,8]
// output --> [4,8,12,16]

// forEach -->
let box=[];
arr.forEach(function(el){
  box.push(el*2)
})
console.log(box)



// map -->
let res=arr.map(function(el){
  return el*2
})
console.log(res)
//if we use console in place of map .. it will not come in for of array... you have to return it
// prefer map over forEach to iterate


