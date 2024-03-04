const express = require('express')
const app = express()
const port = 3000
const bodyparser = require("body-parser")

const static  = express.static('static');
app.use("/",static);
app.use(bodyparser.json())


app.get("/hi",(req, res)=>{
  res.json({
    "message" :"devoping"
  });
});

app.post("/hi",(req,res)=>
{
  const {name} = req.body
  res.status(201).json({
    message:`Hello ${name}`
  })
  console.log(`${name} - A request was made`);
})
app.listen(port,() =>{
    console.log(`app running at ${port}`);
})