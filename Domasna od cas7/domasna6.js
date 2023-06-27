//? Da se rekreira domasnoto od chas 6

const express = require("express");
const app = express();

app.get("/obrabotka/:ime", (req, res)=>{
  const ime = req.params.ime;

  const karakteri = ime.length;
  const brojKarakteri = ime.length % 2 == 0 ? `Paren broj karakteri: Da` : `Paren broj karakteri: Ne`;
  const samoglaski = ["a", "e", "i", "o", "u"];
  
  let brojNaSamoglaski = 0;
  for(let i=0; i<ime.length; i++){
    let karakteriOdIme = ime[i]
    if(samoglaski.includes(karakteriOdIme)){
      brojNaSamoglaski++;
    }
  }
  const brojNaSoglaski = ime.length - brojNaSamoglaski;

  res.send(`Imeto ${ime} ima ${karakteri} karakteri od koi ${brojNaSoglaski} se soglaski, a ${brojNaSamoglaski} se samoglaski. ${brojKarakteri}`);
});


//?Uste edna funkcija za testiranje
app.get("/pravoagolnik/:op/:a/:b", (req, res)=>{
  switch(req.params.op){
   case "plostina":
       return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
   case "perimetar":
    return res.send(`${(2 * Number(req.params.a))+(2 * Number(req.params.b))}`);
   default :
   return res.send("Greska!");
     };
  });

app.listen(10000, (err)=>{
  if(err) return console.log(err);
  console.log("Server started successfully on port 10000")
});


//? Da se instalira Postman aplikacija i da se istrazi
//? Inaku se koristi za polesno testiranje na web aplikacija