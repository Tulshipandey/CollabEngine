const adminAuth = (req , res , next) => {
    const token = "xyz" ;
    const isAdminauthorized = token === "xyz" ;
    if(!isAdminauthorized){
        res.status(401).send("Unauthorized Access");
    }else{
        next() ;
    }
} ;

const userAuth = (req , res , next) => {
    const token = "abc" ;
    const isAdminauthorized = token === "abc" ;
    if(!isAdminauthorized){
        res.status(401).send("Unathorized Access");
    }else{
        next() ;
    }
};
module.exports = {adminAuth , userAuth} ;