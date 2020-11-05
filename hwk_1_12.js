let a = 5;
let b = -13;
let c = 6;

let D = Math.pow(b, 2) - 4 * a * c;

console.log(D)

if (a === 0 || b === 0 || c === 0) {
  console.log("Enter valid constants");
} else {
  if (D < 0) {
    console.log("Solution doesn't exist");
  } else if (D === 0) {
    console.log(`Solution is ${x1}`);
  } else {
    let x1 = (-1 * b + Math.sqrt(D))/ (2 * a);
    let x2 = (-1 * b - Math.sqrt(D))/ (2 * a);
    console.log(`Solutions are ${x1} and ${x2}`);
  }
}
