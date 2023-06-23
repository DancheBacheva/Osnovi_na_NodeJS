const fs = require('fs');
const readWrite = require('./readWrite.js');

//? Chitanje na site studenti od fajlot
fs.readFile('./studenti.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


//? Student ime prezime prosek grad
//{ime: "Petar", grad: "Gevgelija", prosek: 9.9}
//? Dodavanja student vo fajlot
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


//? Brishenje na student od fajlot
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

//? Menuvanje na podatoci na student od fajlot
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


