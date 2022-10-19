let Nam = ("hamMad sAleeM");

//lower

let lower = Nam.toLowerCase();
console.log(lower);



//upper

let upper = Nam.toUpperCase();
console.log(upper);


// title case


function titleCase(Nama){
  return Nama
  .split(' ') .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
}

console.log(titleCase("I will do this today"));

