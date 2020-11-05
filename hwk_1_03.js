let a = +prompt("Angle a?");
let b = +prompt("Angle b?");
let c = 180 - (a + b);

if(a + b < 180) {
  alert (`c equal: ${c}`)
  } else {
    alert("Triangle doesn't exist");
  }