// forEach/map/filter/reduce - can be applied only for array

// forEach:--
// forEach is similar to for loop because it will visit every element
let sweets=["kova", "laddu", "badshaw", "gulab-jamun"]

// Syntax forEach: arrayName.forEach(function(element, index, array) })
// you can take any varialble but order will be same
// forEach will have some callback function inside this parameter inside it
// all higher order function will take some callback function inside 
// callback function will take some parameters inside

// forEach will have three parameters inside callback function : -- element, index and array

sweets.forEach(function(element, index, array){
  console.log(element, index)
  console.log(array) //for each and every console it will print array so, you can ignore it in parameter. so, generally we will take two parameter
})



// it will print the element in line by line manner .. it will not come in box or bag

let box=[];
sweets.forEach(function(element, index, array){
  box.push(element)
})
console.log(box);

//but you are creating a separate array and taking space




let res = sweets.forEach(function(element, index, array){
  return element;
})
console.log(res) //forEach returning undefined, it wont work

//so use map

let rest = sweets.map(function(element, index, array){
  return element;
})
console.log(rest)

// callback parameter function is same for map and foreach
// map will also take lesser space than foreach and give array of element


