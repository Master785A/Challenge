//Challenge 03 — Product
var prompt = require('prompt-sync')();

let product = {
   name: "zinc 50 mg",
   price: Number(prompt('Enter the max prices you want search product : ')),
   category: "Health",
   quantity: 100,
   available: ["Out_Stock", "In_Stock"]

};


let userEnter, pricelsit, totalPriceStock; 


userEnter =  prompt('Enter the name of product : ').toLowerCase();
pricelsit  = product.price;
totalPriceStock = product.price * product.quantity;

if (0 <= pricelsit) {

  console.log(`- the product available right now : ${product.available[1]} - Rested ${product.quantity} inside the stock`);

   console.log(`- the total price of the stock : ${totalPriceStock} DH`);
}
  
else {

   console.log(`- the product is not available right now :${product.available[0]}
   - Rested ${product.quantity} out of the stock`);
      console.log('- the total price of the stock : ' + 0 +" DH" );

}
