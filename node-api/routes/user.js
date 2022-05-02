const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');
const User = require('../models/User');

//UPDATE 
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

//DELETE
router.delete('/:id', verifyTokenAuth, async (req, res) => {
          try {
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User deleted")
          } catch {
                    res.status(500).json(err)
          }
})

// GET ALL DATA
router.get('/', verifyTokenAdmin, async (req, res) => {
          const query = req.query.new;
          try {
                    const users = query ? await User.find().sort({_id: -1}).limit(1) : await User.find();
                    res.status(200).json(users);
          } catch (err){
                    res.status(500).json(err)
          }
})

//GET USER STATS
router.get('/stats', verifyTokenAuth, async (req, res) => {
          const date = new Date();
          const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
          try {
                    const data = await User.aggregate([
                              {$match: {createdAt: {$gte: lastYear}}},
                              {
                                        $project : {
                                                  month : {$month: "$createdAt"},
                                        }
                              },
                              {
                                        $group: {
                                                  _id: "$month",
                                                  total: {$sum: 1},
                                        }
                              }
                    ]) 
                    res.status(200).json(data)

          } catch(err) {
                    res.status(500).json(err)
          }
})



module.exports = router       