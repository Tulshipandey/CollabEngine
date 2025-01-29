const express = require('express');

const app = express() ;

const {adminAuth , userAuth} = require("./middlewares/auth") ;

app.use("/admin" , adminAuth);
app.use("/admin/getUser" , (req , res) => {
   res.send("Got the user data") ;
}) ;
app.use("/admin/deleteUser" , (req , res) => {
   res.send("deleted a user") ;
}) ;

app.use("/user/data" , userAuth , (req , res) => {
   res.send("fetch data successfully") ;
})
app.listen(7777 ,  () => {
    console.log("Server is running on port 7777") ;
}) ;