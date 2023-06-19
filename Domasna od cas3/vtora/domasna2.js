//!prv nacin
//? Za domasna da se dodade uste eden modul so ime domasna.js koj kje ima funkcija da promeni farenhajt vo celzius i obrantno

const c2f = (c) =>{
  return (c*9/5)+32;
  
};

const f2c = (f) => {
return (f-32)*5/9;
}

//? Da ima funkcija sto presmetuva plostina i perimetar na triagolnik
const plostinaTriagolnik = (a, b) => {
  return (a*b)/2;
};

const perimetarTriagolnik = (a, b, c) => {
  return a+b+c;
};

//? Da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik
const plostinaPravoagolnik = (a, b)=>{
  return a*b;
}; 

const perimetarPravoagolnik =(a,b)=>{
  return (2*a)+(2*b);
};

//? Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

const kakovEbrojot = x => {
  return x%2==0 ? `Brojot e paren` : `Brojot e neparen`;
}


module.exports = {
  c2f,
  f2c,
  plostinaTriagolnik,
  perimetarTriagolnik,
  plostinaPravoagolnik,
  perimetarPravoagolnik,
  kakovEbrojot,
}



//!vtor nacin

//* 1
// exports.c2f = (c) =>{
//     return (c*9/5)+32;
    
//   };

// exports.f2c = (f) => {
//   return (f-32)*5/9;
// }


//* 2 
// exports.plostinaTriagolnik = (a, b) => {
//   return (a*b)/2;
// };
 
// exports.perimetarTriagolnik = (a, b, c) => {
//   return a+b+c;
// };

//* 3
// exports.plostinaPravoagolnik = (a, b)=>{
//   return a*b;
// }; 

// exports.perimetarPravoagolnik =(a,b)=>{
//   return (2*a)+(2*b);
// };

//* 4
// exports.kakovEbrojot = (x)=> {
//   return x%2==0 ? `Brojot e paren` : `Brojot e neparen`;
// };