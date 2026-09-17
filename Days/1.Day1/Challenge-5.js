var prompt = require('prompt-sync')();

var dureé = number(prompt("Durée"));


if(dureé < 60){
  console.log("Catégorie : Court métrage"); 
}
else if(dureé < 120){
    console.log("Catégorie : Film stantard"); 
}
else{
    console.log("Catégorie : Film Long");
}
