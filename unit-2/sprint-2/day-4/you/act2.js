// callback function

// function eatBreakFast1(item){
//   console.log("I will eat",item,"as my breakfast");
// }

// eatBreakFast1("maggie")


// example 1
function eatBreakFast(item,time,doBrush){
  doBrush()
  console.log("I will eat",item,"as my breakfast at",time,"am");
}

eatBreakFast("maggie",9,doBrush)


function doBrush(){
  console.log("Do brush first");
}

// order of execution --> 16(function invocation) -> 11(argument   accepted) -> 12(invocation) -> 19 -> 20 (print)- >13(print)

// whenever you pass a function (doBrush) in the other fuction(eatBreakFast) as parameter is called higher order function




// example 2 
// function eatBreakFast(item,time,doBrush){
//   console.log("I will eat",item,"as my breakfast at",time,"am");
//   doBrush()
// }

// eatBreakFast("maggie",9,doBrush)


// function doBrush(){
//   console.log("Do brush first");
// }
// both the console will interchange in this example because of position in doBrush