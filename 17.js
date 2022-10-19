let guests = [
    "Malik" ,
    "Rehan" ,
    "Khan" ,

 ]



guests[guests.indexOf("Khan")]= "Hammad"



guests.unshift("Ali");

guests.splice(2,0,"Usama")

guests.push("Mohsin");
console.log(guests);

console.log(guests + "; There are only two  people are coming");


//remove person
let notInvited1 = guests.shift([0]);
  console.log(notInvited1 +" you are not invited");

  let notInvited2 = guests.shift([1]);
  console.log(notInvited2 +" you are not invited");

  let notInvited3 = guests.shift([2]);
  console.log(notInvited3 +" you are not invited");

  let notInvited4 = guests.shift([3]);
  console.log(notInvited4 +" you are not invited");

console.log(guests);


//invited perons

const notInvited5 = guests.shift([0]);
  console.log(notInvited5 +" you are invited");

const notInvited6 = guests.shift([1]);
  console.log(notInvited6 +" you are invited");



//empty list

let emptyList = guests.splice(0,guests.length);

console.log(emptyList);
