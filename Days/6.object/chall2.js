/*Challenge 02 — Edit a profile
**Level: 1**
*/
let user = {
    username : "Ahmed",  
    age : 22,
    ville : "Marrakech",
    staus : "Student",
};

    user.username  = "Mr";
    user.age  = 22;
    user.ville = "Rabat";
    user.staus = "Worker";
    user.email = ((user.username + ("@email.com")).toLowerCase());

    console.log(user);