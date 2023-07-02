const express = require("express");
const ejs = require ("ejs");

const { zelenchukOdDomasna, dodavanje } = require("./controller/funkcii");

const app = express();
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/zelenchuk", zelenchukOdDomasna);

app.post("/zelenchuk", dodavanje);

app.listen(11100, (err)=>{
  if(err) return console.log(err);
  console.log("Successfully started on port 11100");
  });