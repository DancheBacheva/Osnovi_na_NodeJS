const express = require ("express");
const kalkulator = require("./controller/kalkulator");

const app = express();

app.get("/plostinaP/:a/:b", kalkulator.plostinaPravoagolnik);
app.get("/vrednost/:c2f", kalkulator.pretvoriStepeni);
app.get("/vrednost/:f2c", kalkulator.pretvoriStepeni);
app.get("/operacija/:sobiranje/:a/:b", kalkulator.kalkulator);
app.get("/operacija/:odzemanje/:a/:b", kalkulator.kalkulator);
app.get("/operacija/:delenje/:a/:b", kalkulator.kalkulator);
app.get("/operacija/:mnozenje/:a/:b", kalkulator.kalkulator);
app.get("/newton/:mass/:acc", kalkulator.presmetajSila);
app.get("/plostinaT/:a/:b", kalkulator.plostinaTriagolnik);


app.listen(10000, (err)=>{
  if (err) return console.log(err);
  console.log("Server started successfully");
});
