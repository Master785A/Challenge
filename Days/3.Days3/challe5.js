/*Challenge 5: The Universal Summer (Rest Parameter)
Objective: To process a variable number of arguments.
Instructions: Create a function additionnerToutthat accepts any number of
 numeric arguments (without knowing in advance how many) and returns the total sum of all these numbers.
Example: additionnerTout(10, 20, 30, 40) ➔ 100.
Concepts: Rest parameters ( ...args), loops or method reduce().
*/

function additionnerTout(...args){
  let a = (...args) + (...args) ;
  return args + args ;  
}   
let a = additionnerTout(10, 20);
console.log(a);


/*
function add(a, b) {
console.log(a+b);
}
let result = add(5, 3);
console.log(result);
--------------------------
function add(a, b) {
  return a + b;
}

let result = add(5, 3);

console.log(result);
*/