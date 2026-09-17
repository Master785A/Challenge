//Challenge 4: Calculating a car's fuel consumption
var prompt = require('prompt-sync')();
//Ask the user for inputs
let userInputa = prompt("Distance en km : ");
let userInputb = prompt("Carburant en litres : ");

//Calculation output
let litres = Number(userInputb);
let kilomètres = Number(userInputa) ;

let Consommation = (litres / kilomètres) * 100;

console.log("Consommation : " + Consommation + " L/100 km.");
