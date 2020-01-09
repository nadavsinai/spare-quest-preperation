/*.

 1st part :

 Write a JavaScript function to convert an amount to  the least amount of coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
  Output : 25, 10, 10, 1


2nd part -
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
 A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 2 bottles of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 2, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 6.5

3rd part -
write a function that takes a the array of possible coins
and returns a function that takes the list of products which returns a function that takes the amount of money given
and returns an object with the following shape:

{
  total:26 // sum of change
  coins:{
      10:2 // 2 coins of 10
      5:1 // 1 coins of 5
      1:1 // 1 coin of 1
      }
 }


  example

  const createSumCalcForProducts = makeTillForCoins([10,5,1,0.50]);

  const changeCalculator = createSumCalcForProducts([
      { product: "Milk", quantity: 2, price: 1.50 },
      { product: "Cereals", quantity: 1, price: 2.50 }
   ]); // sum is 6.5, but there's no output yet.

  const change = changeCalculator(20) // customer gave 20 to till

  console.log(change)
    {
    total: 13.5
    coins: {
     10:1
     1: 3
     "0.5": 1
     }
   }






 list of groceried and number (cash) then calculates the return change
getChangeFor([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
],10) ➞

 */
