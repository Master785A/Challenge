
var prompt = require('prompt-sync')();
let list = {
marque : [],
catégorie : ["SUV", "Berline", "Sedane"],
prix : [],
kilométrage : [100000, 200000, 300000],
disponsible : [true, false],
}

function disponsibleNomber(){
    let i = 0;
    let nomber = list.disponsible[i];

    while(i < list.disponsible.length){
    if (list.disponsible[i] === true){ 
        console.log(`The status of cars that exist quantity is: ${list.disponsible[i]}`);
        break;
    }
     i++;
    if (list.disponsible[i] === false){ 
        console.log(`The status of cars that exist quantity is: ${list.disponsible[i]}`);
    }
         }

   return disponsibleNomber;
   

}


function moyenPrix(prixMin){
let moyen = prixMin * 3 ;
let userEnter = Number(pompet("Enter the price").push());

}