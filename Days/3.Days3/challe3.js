/*Challenge 3: Professional Email Generator
Objective: To use a function with multiple parameters.
Instructions: Write a function genererEmailthat takes two parameters: prenomand nom. The function must return an email address in the form: prenom.nom@entreprise.com(all lowercase).
Example: genererEmail("Tayeb", "Souini") ➔ "tayeb.souini@entreprise.com".
Concepts: Multiple parameters, concatenation or Template Literals ( `), method .toLowerCase().
*/
var prompt = require('prompt-sync')();
let prénom, nom, result;
prénom = prompt("Your First Name : "); 
nom = prompt("Your Last Name : "); 
result = `${prénom} ${nom}` ;

function genererEmail(prénom, nom){
 let a = `${prénom}.${nom}@entreprise.com`;
  return a ;
}

console.log(genererEmail(prénom, nom).toLowerCase());
