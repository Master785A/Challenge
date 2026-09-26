var prompt = require('prompt-sync')();

let day, days;
day = prompt("What is the day name?");
switch (day){
  case 1:
  break;
   
    case "Monday" :
    console.log("\nMonday" + " " + "Y");
    break ;
   
    case "Wendsday":
    console.log("\nWendsday" + " " + "\nY");
    break ;

    case "Thuresday":
    console.log("\nThuresday", " " + "\nY");
    break ;

default:
console.log("Invalid Day");
}
/*
let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log( "Today is " + day);
*/
/*
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}
*/