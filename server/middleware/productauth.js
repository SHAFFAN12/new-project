const jwt  = require("jsonwebtoken");
module.exports = (req,res,next) => {
    const token = req.header('Authorization');
    if(!token){
        res.status(401).json({msg:'Authorization denied!'});
    };
    try{
        const decoded = jwt.verify(token,process.env.secretkey);
        req.vendor = decoded.vendor;
        next();
        }
    catch(err){
        console.error(err.message);
        res.status(401).json({msg:'Authorization denied!'});
    };
};