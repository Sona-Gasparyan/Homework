let year = +prompt("How old are you??")
if(year <= 12){
  let b = prompt ("month?")
  if(b == "yes"){
    console.log("baby")
  } else if (b === "no" && year > 1 && year <= 2){
    console.log("toddler");
  } else if(b === "no" && year >= 3 && year <= 12){
    console.log("child");
  } else if( b=== "no" && year >= 13 && year <= 17){
    console.log("teenager");
  } 
  
}else {
  console.log("adult")
}
