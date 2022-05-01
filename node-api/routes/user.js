const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyToken, verifyTokenAuth } = require('./verifyToken');

//UPDAT
router.put('/:id', verifyTokenAuth, async (req, res) => {
          if(req.body.password) {
                    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()
          } try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id,  
          {
                    $set: req.body,
          },{new: true}
          );
          res.status(200).json(updatedUser)
} catch (err) { 
          res.status(500).json(err)
}

})

module.exports = router       