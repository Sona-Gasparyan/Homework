let a = 7;
if(a % 10 === 0 || a < 10){
  alert(a)
} else{
  let b = a % 10;
  let c = (a - b) / 10;
  alert("" + b + c )
}