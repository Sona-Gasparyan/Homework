let num = prompt('number:');
let counter = "";
for(let i = 1; i < num.length; i++ ){
  counter += num[i]
  
}
// console.log(counter);
if(num.length <=2 ){
  console.log("" + counter +num[0] )
} else {
  let lastInd = counter % 10;
  // console.log(lastInd);
  let middleInd = (counter - lastInd) /10;
  let firstInd = num[0];
  let reverse = Number("" + lastInd + middleInd + firstInd);
  console.log(reverse);
}
