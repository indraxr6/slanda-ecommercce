const user = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
          const authHeader = req.headers.token;
          if(authHeader){
                    const token = authHeader.split(" ")[1];
                    jwt.verify(token, process.env.JWT_PASS, (err, user)=>{
                              if (err) res.status(403).json({message: "Invalid token"});
                              req.user = user;
                              next();
                    })
          } else {
                    return res.status(401).json({message: "Unauthorized"});
          }
}

const verifyTokenAuth = (req, res, next) => {
          verifyToken(req, res, () => {
                    if (req.user._id === req.params._id || req.user.isAdmin) {
                              next();
                              // next()
                    } else {
                              res.status(403).json({message: "Not Allowed"});
                    }
          })
}

const verifyTokenAdmin = (req, res, next) => {
          verifyToken(req, res, () => {
                    if(req.user.isAdmin) {
                              return next();
                              // next();

                    } else {
                              res.status(403).json({message: "Not Allowed"});
                    }
          })
          
}

module.exports = {verifyToken, verifyTokenAuth, verifyTokenAdmin}