let x = +prompt("number x:");
let y = +prompt("number y:");
let z = +prompt("number z:");

if(x>0 && y>0 && z>0){
  console.log("+");
} else if (x<0 && y<0 && z<0){
  console.log("-");
} else if(x>0 && y<0 && z<0){
  console.log("+");
} else if(x<0 && y<0 && z>0){
  console.log("+");
} else if(x<0 && y>0 && z<0){
  console.log("+");
} else if(x == 0 || y == 0 || z == 0){
  console.log("unsigned");
} else{
  console.log("-");
}