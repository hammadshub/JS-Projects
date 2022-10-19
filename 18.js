let World = [
     "Saudi",
     "Dubai",
     "Japan",
     "China",
     "Ireland"
];


console.log(World);

//alphabetical order without changing original array

let order = [...World].sort();

console.log(order);

console.log(World);



// array in reverse alphabetical order without changing original array

 let reversed = [...order].reverse();
 console.log(reversed);

 console.log(World);



 //Reverse the order of your list. Print the array to show that its order has changed.

let Reverse = reversed.reverse();
console.log(Reverse);


// Reverse the order of your list again. Print the list to show it’s back to its original order.

let againReverse = reversed.reverse();
console.log(againReverse);


//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let againAlpha = againReverse.sort();
console.log(againAlpha);


//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let reverseAlpha = againAlpha.reverse();
console.log(reverseAlpha);


