//? Da istrazite uste nekolku metodi na fs modulot
const fs = require('fs');

//? Kako da izbrisite  fajl
//!UNLINK    //fs.unlink(imeNaFajl, callback)
const file1Content = `Ova e sodrzinata na prviot kreiran fajl`
fs.writeFileSync("./file1.txt", file1Content);

fs.unlink(`./file1.txt`, (err)=>{
  if (err) throw err;
  console.log('Fajlot e izbrisan!');
});


// //? Kako da preimenuvate fajl
// //!RENAME   //fs.rename(staroIme, novoIme, callback)
const file2Content = `Ova e sodrzinata na vtoriot kreiran fajl`;
fs.writeFile("./file2.txt", file2Content, (err) => {
  if (err) throw err;
  console.log("Vtoriot fajl e kreiran!");
});

fs.rename('file2.txt', 'fileRenamed.txt', (err)=>{
  if (err) throw err;
  console.log('Fajlot e preimenuvan!');
});

// //? Eden metod po zelba
// //!COPYFILESYNC //  fs.copyFileSync(imeNaFajlot, imeNaKopija);
const file3Content = `Ova e sodrzinata na tretiot kreiran fajl`
fs.writeFileSync("./file3.txt", file3Content);

fs.copyFileSync('file3.txt', 'fileCopy.txt');
console.log('file3.txt was copied to fileCopy.txt');


// //? Da kreirate fajl
// //!WRITEFILE  //fs.writeFile(imeNaFajl, sodrzina, callback)
//*Prv nachin 
fs.writeFile('file4.txt', 'Ova e sodrzinata na cetvrtiot kreiran fajl', (err)=>{
  if (err) throw err;
  console.log('Cetvrtiot fajl e kreiran!');
});

// //!OPEN //so open se kreira file na drug nacin, ama za da se pisuva vo fajlot, treba da se upotrebi druga funkcija
//*Vtor nachin
fs.open('file5.txt', 'w', (err, file)=>{
  if (err) throw err;
  console.log('Pettiot fajl e kreiran');
});

// //!APPENDFILE za kreiranje i azuriranje
// *Tret nachin
fs.appendFile('file6.txt', 'Ova e sodrzinata na shestiot fajl. ', (err)=>{
  if (err) throw err;
  console.log('Shestiot fajl e kreiran!');
});

fs.appendFile('file6.txt', 'Ova e dodadenoto na shestiot fajl.', (err)=>{
  if (err) throw err;
  console.log('Dodadena sodrzina na shestiot fajl!');
});

// //? Da procitate fajl
// //!READFILE
// //* sinhrono
const tekstVoFile4 = fs.readFileSync('./file4.txt', 'utf-8');
console.log(tekstVoFile4);

// //* asinhrono
fs.readFile('./file6.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});