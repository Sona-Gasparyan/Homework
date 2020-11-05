let num = 3 ;
let a = num % 3 === 0;
let b = num % 5 === 0;
let c = num % 7 === 0;

if(a == true && b == true && c == true){
  alert (`${num} is a multiple of 3, 5 and 7`);
} else if(a == true && b == true) {
  alert (`${num} is a multiple of 3 and 5`);
} else if(a == true && c == true) {
  alert (`${num} is a multiple of 3 and 7`);
} else if(b == true && c == true) {
  alert (`${num} is a multiple of 5 and 7`);
} else if (a == true){
  alert(`${num} is a multiple of 3`);
} else if (b == true){
  alert(`${num} is a multiple of 5`);
} else if (c == true){
  alert(`${num} is a multiple of 7`);
} else {
  alert(`${num} is not a multiple of 3,5 and 7`)
}
