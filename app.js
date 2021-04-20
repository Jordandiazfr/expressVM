const express = require("express")
const app = express()
const ip = require('ip');
const ipAddress = ip.address();
const port=3000
app.get ('/', ((req,res) => {
    res.send("Hello World ")
 
  
}))

app.listen( port, ()=> {
    console.log("Server up and running")
    console.log(`Network access via: ${ipAddress}:${port}!`)

})