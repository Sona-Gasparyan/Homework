let number = +prompt("num:")
let max=0, min=9;
let diff;
number = ""+number;

for(let i=0; i<number.length;i++ ){
  let current = String(number[i]);
  if(current>max){
    max = current;
  }
  if(current<=min){
    min = current;
  }
  diff = max-min
}

console.log(d