//? Za domasna da se dodade uste eden modul so ime domasna.js koj kje ima funkcija da promeni farenhajt vo celzius i obrantno

function pretvoriStepeni(stepeni){
  return function(vrednost){
    switch(stepeni){
      case "c2f":
        return (vrednost*9/5)+32;
      case "f2c":
        return (vrednost-32)*5/9;
    }
  }
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
  pretvoriStepeni,
  plostinaTriagolnik,
  perimetarTriagolnik,
  plostinaPravoagolnik,
  perimetarPravoagolnik,
  kakovEbrojot,
}