/*Challenge 4: Personalized Greeting with Default Value
Objective: To manipulate the default values ​​of the parameters.
Instructions: Write a function saluerClient that accepts two parameters:
 nom(string) and titre(string, default value: "Client").
If only the name is provided, display: "Bonjour Client [nom]".
If both are provided, display: "Bonjour [titre] [nom]".
Example: saluerClient("Dupont") ➔ "Bonjour Client Dupont".
Concepts: Default parameters.*/
/*
//Method 1
function saluerClient(nom, titre = "Client"){
let a = `Bonjour ${titre} ${nom}`;

console.log(`${a}`);
return a ;
}

saluerClient("Ahmed", "Q");
*/

//Method 2
var prompt = require('prompt-sync');
function saluerClient(nom, titre = "Client"){
 let a, b;
 a =`Bonjour ${titre} ${nom}`;
 b = `Bonjour ${titre} ${nom}`;

 if(a == 'Client'){
  console.log(`${a}`) ;
    }
else {
  console.log(`${b}`) ;
    }
 return ;
}

saluerClient("Ahmed", "Master");

