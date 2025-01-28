const express = require('express');

const app = express() ;

 app.use("/test" , (req , res) => {
    res.send("Hello from the server") ;
 })

 app.use("/dashboard" , (req , res) => {
    res.send("Welcome to the dashboard") ;
 })
app.listen(7777 ,  () => {
    console.log("Server is running on port 7777") ;
}) ;