var prompt = require('prompt-sync')();



console.log("All menu options : ");

console.log("\n1 → Afficher le profil", "\n2 → Afficher les paramètres", 
    "\n3 → Afficher les notifications", "\n4 → Se déconnecter");

let choice = Number(prompt("Enter your favourite option"));

switch(choice){
    case 1:
console.log("Afficher le profil",);
    break;

    case 2:
    console.log("\n2 → Afficher les paramètres");

    break;
     
    case 3: 
    console.log("Afficher les notifications");
    break;
    
    case 4: 
    console.log("Se déconnecte");
    break;

    default:
    console.log("Choix invalide");
}