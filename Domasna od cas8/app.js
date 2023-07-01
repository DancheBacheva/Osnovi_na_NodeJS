const express = require ("express");
const kalkulator = require("./controller/kalkulator");

const app = express();

app.get("/plostinaP/:a/:b", kalkulator.plostinaPravoagolnik);
app.get("/pretvoriStepeni/:operacija/:broj", kalkulator.pretvoriStepeni);
app.get("/kalkulator/:op/:a/:b", kalkulator.kalkulator);
app.get("/newton/:mass/:acc", kalkulator.presmetajSila);
app.get("/plostinaT/:a/:b", kalkulator.plostinaTriagolnik);


app.listen(10000, (err)=>{
  if (err) return console.log(err);
  console.log("Server started successfully");
});
