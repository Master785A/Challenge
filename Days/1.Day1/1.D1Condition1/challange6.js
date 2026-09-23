//Challenge 6: An application's menu

//You are expanding the main menu of an application.

var prompt = require('prompt-sync')();

console.log("All menu options ");   
console.log("1 → Afficher le profil", "\n2 → Afficher les paramètres", "\n3 → Afficher les notifications", "\n4 → Se déconnecter");   

//----------------------------
let choice = Number(prompt("You need to Choose an option:"));
//or +prompt("You need to Choose an option:"); 

switch (choice){
   case 1:
   console.log("Afficher le profil")
   break;

    case 2:
    console.log("Afficher les paramètres")
    break;

    case 3:
    console.log("Afficher les notifications");   
    break;
  
   case 4:
    console.log("Se déconnecter");
    break;

   default:
console.log("Choix invalide.");       
}
