const fs = require('fs');
const readWrite = require('./readWrite.js');

//? Student ime prezime prosek grad
//{ime: "Petar", grad: "Gevgelija", prosek: 9.9}
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of fajlot | fs.readFile
fs.readFile('./studenti.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
let studenti = [];
(async () => {
    try {
      const dataString = await readWrite.fileRead("studenti.json");
      studenti = JSON.parse(dataString);
      console.log(studenti);
    } catch (err) { 
      console.log(err);
    }
})();
console.log(studenti);
     
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
(async () => {
    try {
      const dataString = await readWrite.fileRead("studenti.json");
      studenti = JSON.parse(dataString);
      studenti.push({ ime: "Petar", grad: "Gevgelija", prosek: 9.9 });
      console.log(studenti);
    } catch (err) { 
      console.log(err);
    }
})();

//? 4. Nizata od js niza / objekt treba da se konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile
(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    let studenti = JSON.parse(dataString);
    studenti.push({ ime: "Petar", grad: "Gevgelija", prosek: 9.9 });
    console.log(studenti);
    const dataStringChanged = JSON.stringify(studenti);
    await readWrite.fileWrite("studenti.json", dataStringChanged);

  } catch (err) { 
    console.log(err);
  }
})();




//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da she izbrtishe student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot


// (async () => {
//   try {
//     const dataString = await readWrite.fileRead("studenti.json");
//     let studenti = JSON.parse(dataString);

//     const sortProsek = studenti.sort((a, b) => {
//       if (a.prosek < b.prosek) {
//         return -1;
//       } else if (a.prosek > b.prosek) {
//         return 1;
//       }
//       return 0;
//     });

// await readWrite.fileWrite("prosek.txt", JSON.stringify(sredenProsek));
// await readWrite.fileDelete("prosek.txt");
// } catch (err) {
// console.log(err);
// }
// })();