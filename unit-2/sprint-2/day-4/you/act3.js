function web19(count,web18){
  console.log("we are students of web19 and we are",count,"in number")
  web18()
}
web19(700,web18);

function web18(){
  console.log("there are 130 web-18 students as well")
}

// 5 (invoke) - 1- 2(print) - 3(invoke) -7 -8(print)



// diff between returning and consoling
function web19(count,web18){
  console.log("we are students of web19 and we are",count,"in number")
 console.log(web18())
}
web19(700,web18);

function web18(){
  return ("there are 130 web-18 students as well")
}

// it will give undefined if return removed
// whenever invoking a function, you sholud console and whenever you are consoling a function you should return