function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
// nodublicate number nar korar function

const numbers = [5, 6, 11, 12, 98, 5];

function doblicateNumbers(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

let number = [5, 6, 11, 12, 98, 5];
let target1 = 5;
 
function coundDoblicateNumber(arr, target){
 let count = 0;

 for(let number of arr){
  if(number === target){
    count++;
  }
 }
 return count;
}
console.log(coundDoblicateNumber(number,target1));