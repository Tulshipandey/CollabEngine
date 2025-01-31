const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    firstName : {
        type : String 
    }, lastName : {
        type : String  
    }, emailId : {
        type : String  
    }, password :{
        type : String 
    }, age  : {
        type : Number 
    }
}) ;

const User = mongoose.model("User", userSchema) ;
// we use User instead of user , we always keep the name of model starting with capital ;
module.exports = User ;