const express = require('express');
const app = express() ;
const connectDb = require('./config/database') ;
const User = require("./models/user") ;


app.post("/signup" , async (req , res) => {
   // creating a new instance of User model
   const user = new User({
      firstName : "Bhawani",
      lastName : "Pandey",
      emailId : "bhawanipandey@gmail.com",
      password : "Bhawani@123" ,
      age : 23,
   }) ;

   try{
      await user.save() ;
      res.send("User data added successfully") ;
   }catch(err){
      res.status(400).send("Some error in adding data to database" + err.message) ;
   }
   
}) ;


connectDb().then(() => {
   console.log ("Database connetion successfully established") ;
   app.listen(7777 , () => {
      console.log("Server is listening on port 7777") ;  
   });
}).catch((err) => {
    console.error("Error in connecting database") ;
});