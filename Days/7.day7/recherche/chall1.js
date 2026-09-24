
function searchFun(target) {
    let nombres = [4, 8, 16, 23, 42];
    let i = 0;
    let j = 0;
    let found = false;

    while (i < nombres.length) {
        if (nombres[i] === target) {
              //if  --->computer need to check first List of nombres----> then compare the valeur == false or true
            found = true;
            console.log("This number is found : " + nombres[i]);
            break;
    }
                i++;
    }
    if (found === false) {
            console.log("This number is not found");
        }
    return target;
}




console.log(searchFun(100));

