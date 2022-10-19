//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.




//  According to Exercise 16

let guests = [
    "Malik" ,
    "Rehan" ,
    "Khan" ,
 ]

guests[guests.indexOf("Khan")]= "Hammad"
console.log(guests);


guests.unshift("Ali");

guests.splice(2,0,"Usama")

guests.push("Mohsin");
console.log(guests);


console.log(guests[0] + ", you are invited in todays dinner. " );
console.log("You are also invited in todays dinner, Mr. " +  guests[1] );
console.log("Khan is not comming so instead of him, " + guests[2] +" you are comming." );
console.log("You are also invited in todays dinner, Mr. " +  guests[3] );
console.log("You are also invited in todays dinner, Mr. " +  guests[4] );
console.log("You are also invited in todays dinner, Mr. " +  guests[5] );






// Exercise 19


let totalGuestsInvited = guests.length;

console.log(totalGuestsInvited);
