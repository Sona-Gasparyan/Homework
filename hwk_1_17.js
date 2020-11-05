let area = prompt("Type the name of a figure");
let a;
let b;
let s;

  if (area == "triangle") {
     a = +prompt("the height is:")
     b = +prompt("the base is:")
      if(  a > 0 && b > 0){
        s = (a * b) / 2;
        alert(`Your ${area}'s area is ${s}`)
      } else {
        alert("Enter positive numbers")
      }
  } else if (area == "rectangle" ) {
   a = +prompt("a:")
   b = +prompt("b:")
      if( a > 0 && b > 0){
        s = a * b;
        alert(`Your ${area}'s area is ${s}`)
      } else { 
        alert("Enter positive numbers")
      }
} else {
  alert("Figure name is wrong!!!")
}