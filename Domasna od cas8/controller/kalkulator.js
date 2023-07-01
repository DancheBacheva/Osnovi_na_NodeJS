//? DA SE KREIRA VO CALCULATOR USTE 6 funkcii
const fs = require("fs");

const parseTemplate = async (template, object = null)=> {
  return new Promise ((success, fail)=>{
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content)=>{
      if(err){
        return fail(err);
      }
      if (object){
        for (property in object){
          content = content.replaceAll(`{${property}}`, object[property]);
        }
      }
      return success(content);
    });
  });
};

//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
const plostinaPravoagolnik = async (req, res) =>{
 const a = req.params.a;
 const b = req.params.b;
 const plostinaP = a*b;
 const response = await parseTemplate("rezultat.html", {
  ime: "Плоштината на правоаголник",
  data: plostinaP,
  opis: "Формулата за пресметување плоштина на правоаголник е: P=a*b"
});
res.send(response);
};

//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
const pretvoriStepeni = async (req,res)=>{
  let rezultat = "";
  switch(req.params.operacija){
    case "c2f":
      rezultat = `${Number(req.params.broj*9/5)+32}`
      break;
    case "f2c":
      rezultat = `${Number(req.params.broj-32)*5/9}`
      break;
    default:
      rezultat = "Nepoznat operator"; 
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "Претворање степени",
    data: rezultat,
    opis: "Овде може да претворите степени од °C во °F и обратно"
  })
  res.send(response);
};


//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
const kalkulator = async (req, res) => {
  let rezultat = "";
  switch(req.params.op){
    case "sobiranje":
    rezultat = `${Number(req.params.a) + Number(req.params.b)}`;
    break;
  case "odzemanje":
    rezultat = `${Number(req.params.a) - Number(req.params.b)}`;
    break;
  case "delenje":
    rezultat = `${Number(req.params.a) / Number(req.params.b)}`;
    break;
  case "mnozenje":
    rezultat = `${Number(req.params.a) * Number(req.params.b)}`;
    break;
  default:
    return res.send("Nepoznat operator!");
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "Калкулатор",
    data: rezultat,
    opis: "Внесете операција и број и пресметајте го збирот, разликата, производот или количникот на два броја."
  })
  res.send(response);
};


//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA

const presmetajSila = async (req, res) => {
  const mass = req.params.mass;
  const acc = req.params.acc;
  const newton = mass * acc;
  const response = await parseTemplate("rezultat.html", {
    ime: "Сила",
    data: newton,
    opis: "Формулата за пресметување сила е: F=m*a"
  })
  res.send(response);
};


//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
const plostinaTriagolnik = async (req, res) =>{
  const a = req.params.a;
  const b = req.params.b;
  const plostinaT = a*b/2;
  const response = await parseTemplate("rezultat.html", {
    ime: "triagolnik",
    data: plostinaT,
    opis: "Формулата за пресметување плоштина на триаголник е: P=a*b/2"
  });
 res.send(response);
 };



module.exports = {
plostinaPravoagolnik,
pretvoriStepeni,
kalkulator,
presmetajSila,
plostinaTriagolnik,
};


//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
