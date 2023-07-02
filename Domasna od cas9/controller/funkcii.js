//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const fs = require("fs");

let domasna = {
  ime: "Danche",
  prezime: "Bacheva",
  ovoshje: ["Jabolko, Praska, Kajsija, Krusha"],
  zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
  vitamini: [
    { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
    { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
    { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
    { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
    { ime: "Domat", vitamin: "G", mineral: "Srebro" },
  ],
};

const zelenchukOdDomasna = (req, res)=>{
  res.render("index", domasna)
};


const dodavanje = (req, res)=>{
  console.log(req.body);
  const novElement ={
    ime: req.body.ime,
    vitamin: req.body.vitamin,
    mineral: req.body.mineral
  }
  domasna.vitamini.push(novElement);

  res.render("index", domasna);
};


module.exports = {
  zelenchukOdDomasna,
  dodavanje
};