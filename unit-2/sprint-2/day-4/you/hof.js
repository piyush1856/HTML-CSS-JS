function javascript(){
  console.log("Welcometo JS");
}
// js can't recognise a function until someone calls it, so invoke it.
javascript()

//order of execution --> 5->1->2


function javascript(message){
  console.log("Welcometo JS"+" "+"Learn"+" "+message);
}

javascript("HOF")

//argument vs parameter
// function sum(a,b){ --> parameters (a,b)
  
// }
// sum(2,3) --> argument


// let a= string/number/boolean/array/obj