const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()
  });

  try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({username : req.body.username});
    !user && res.status(401).json({message: "User not found"});

    const hash = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASS);
    const inputpassword = hash.toString(CryptoJS.enc.Utf8);
    inputpassword !== req.body.password && res.status(401).json({message: "Password is incorrect"});

      const accessToken = jwt.sign({
        _id: user.id, isAdmin: user.isAdmin,
      }, process.env.JWT_PASS, { expiresIn: "1h" });

    const { password, ...others } = user._doc;
    res.status(200).json({...others, accessToken});

  } catch (err) {
    res.status(500).json(err)
  }
  const user = await User.findOne({email: req.body.email});
});

module.exports = router;
