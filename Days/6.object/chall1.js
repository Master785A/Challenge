let  student = {
     firstName : "Yassine",
     lastName : "Amrani",
     age : 21,
     city : "Yousseoufia",
     school : "Youcode" 
};

let a =`${student.firstName} ${student.lastName}` ;

console.log(`Prénom : ${student.firstName}`);
console.log(`Nom : ${student.lastName}`);
console.log(`age : ${a} a ${student.age}`);
console.log(`city: ${student.city}.`);
console.log(`${a} a ${student.age} ans et habite à ${student.city}.`);

//Yassine Amrani a 21 ans et habite à Youssoufia.
