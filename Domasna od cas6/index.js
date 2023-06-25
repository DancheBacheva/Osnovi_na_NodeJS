// ? Servis koj kje obrabotuva ruti od sledniot tip
// /ime/aleksandar
// /ime/angela
// /ime/julija

// parno: da, karakteri 5, soglaski: 2, samoglaski

const http = require("http");

const handler = (req, res)=>{
  const [, ime] = req.url.split("/ime/");
  
  const brojKarakteri = ime.length%2==0 ? `Paren broj karakteri: Da` : `Paren broj karakteri: Ne` ;
  const karakteri = ime.length;
  const samoglaski = ["a", "e", "i", "o", "u"];
  
  let brojNaSamoglaski = 0;
  for(let i=0; i<ime.length; i++){
    let karakteriOdIme = ime[i]
    if(samoglaski.includes(karakteriOdIme)){
    brojNaSamoglaski++;
    }
  };
  
  const brojNaSoglaski = ime.length - brojNaSamoglaski;
  
  res.end(`Imeto ${ime} ima ${karakteri} karakteri od koi ${brojNaSoglaski} se soglaski, a ${brojNaSamoglaski} se samoglaski. ${brojKarakteri}`);
  };


const server = http.createServer(handler);
server.listen(10000, (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});




