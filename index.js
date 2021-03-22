// npm install express --save

const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(3000, () => console.log("listing port 3000"))