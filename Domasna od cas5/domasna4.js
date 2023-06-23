const fs = require('fs');
const readWrite = require('./readWrite.js');

//? Student ime prezime prosek grad
//{ime: "Petar", grad: "Gevgelija", prosek: 9.9}
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//! - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of fajlot | fs.readFile
fs.readFile('./studenti.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
(async () => {
    try {
      const dataString = await readWrite.fileRead("studenti.json");
      studenti = JSON.parse(dataString);
      console.log(studenti);
    } catch (err) { 
      console.log(err);
    }
})();
     
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
let studenti = [];
(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    let studenti = JSON.parse(dataString);
    studenti.push({ ime: "Petar", grad: "Gevgelija", prosek: 9.9 });
    console.log(studenti);
    const dataStringChanged = JSON.stringify(studenti);
  } catch (err) { 
    console.log(err);
  }
})();
console.log(studenti);
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
console.log(studenti);

//! - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
fs.readFile('./studenti.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
(async () => {
    try {
      const dataString = await readWrite.fileRead("studenti.json");
      studenti = JSON.parse(dataString);
      console.log(studenti);
    } catch (err) { 
      console.log(err);
    }
})();

//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataString);
    let studentiNova = studenti.map(student=>{
      if(student.ime=="Risto"){
        return {...student, ime: "Kostadin"};
      };
      return student;
    }); console.log(studentiNova);
  } catch (err) { 
    console.log(err);
  }
})();

//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataString);
    let studentiNova = studenti.map(student=>{
      if(student.ime=="Risto"){
        return {...student, ime: "Kostadin"};
      };
      return student;
    }); console.log(studentiNova);
    const dataStringChanged = JSON.stringify(studentiNova);
  } catch (err) { 
    console.log(err);
  }
})();

//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile
(async () => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    studenti = JSON.parse(dataString);
    let studentiNova = studenti.map(student=>{
      if(student.ime=="Risto"){
        return {...student, ime: "Kostadin"};
      };
      return student;
    }); console.log(studentiNova);
    const dataStringChanged = JSON.stringify(studentiNova);
    await readWrite.fileWrite("studenti.json", dataStringChanged);
  } catch (err) { 
    console.log(err);
  }
})();



//! - Treba da se izbrishe student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
fs.readFile('./studenti.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
(async ()=> {
  try{
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    console.log(studenti);
  }catch (err){
    console.log(err);
  }
})();

//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
(async()=>{
  try{
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    console.log(studenti);
    const studenti2 = studenti.filter((student) =>
    student.ime !== "Petar");
    console.log(studenti2);
  }catch (err){
    console.log(err);
  }
})();

//? 4. Nizata od js treba da bidde konvertirana vo tekst
(async()=>{
  try{
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    console.log(studenti);
    const studenti2 = studenti.filter((student) =>
    student.ime !== "Petar");
    console.log(studenti2);
    const dataStringChanged = JSON.stringify(studenti2);
  }catch (err){
    console.log(err);
  }
})();

//? 5. Tekstot treba da bide zachuvan vo fajlot
(async()=>{
  try{
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    console.log(studenti);
    const studenti2 = studenti.filter((student) =>
    student.ime !== "Petar");
    console.log(studenti2);
    const dataStringChanged = JSON.stringify(studenti2);
    await readWrite.fileWrite("studenti.json", dataStringChanged);
  }catch (err){
    console.log(err);
  }
})();


