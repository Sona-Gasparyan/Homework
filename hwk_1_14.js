let num = prompt("Write a number?")
let digit = "5";
let result = "No!"
for(let i = 0; i < num.length; i++){
  if(num[i] === digit){
    result = "Yes!"
  } 
}

console.log(result);