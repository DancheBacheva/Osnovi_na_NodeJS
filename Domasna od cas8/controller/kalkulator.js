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
  ime: "Pravoagolnik",
  data: plostinaP
});
res.send(response);
};

//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
const pretvoriStepeni = async (req,res)=>{
  switch(req.params.vrednost){
    case "c2f":
      return res.send((vrednost*9/5)+32);
    case "f2c":
      return res.send((vrednost-32)*5/9);
    default:
      return res.send("Error!"); 
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "stepeni",
    data: vrednost
  })
  res.send(response);
};


//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
const kalkulator = async (req, res) => {
  switch(req.params.operacija){
    case "sobiranje":
    return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
  case "odzemanje":
    return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
  case "delenje":
    return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
  case "mnozenje":
    return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
  default:
    return res.send("Nepoznat operator!");
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "kalkulator",
    data: operacija
  })
  res.send(response);
};


//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA

const presmetajSila = async (req, res) => {
  const mass = req.params.mass;
  const acc = req.params.acc;
  const newton = mass * acc;
  const response = await parseTemplate("rezultat.html", {
    ime: "newton",
    data: newton
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
