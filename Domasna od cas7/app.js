const express = require("express");
const app = express();

app.get("/obrabotka/:op/:a/:b", (req, res)=>{
 switch(req.params.op){
  case "plostinaPravoagolnik":
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
  case "perimetarPravoagolnik":
    return res.send(`${(2 * Number(req.params.a))+(2 * Number(req.params.b))}`);
  default :
    return res.send("Greska!");
    };
 });

 app.listen(10001, (err)=>{
  if(err) return console.log(err);
  console.log("Server started successfully on port 10001")
});
