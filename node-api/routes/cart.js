const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');
const Cart = require('../models/Cart');

//Create Product
router.post('/', verifyToken, async (req, res) => {
          const newCart = new Cart(req.body);
          try {
                    const savedCart = await new newCart.save();
                    res.status(200).json(savedCart)
                    
          } catch(err) {
                    res.status(500).json(err)
          }

}),

//Update
router.put('/:id', verifyTokenAuth, async (req, res) => {
          try {
          const updatedCart = await Cart.findByIdAndUpdate(req.params.id,  
          {$set: req.body,},{new: true}
          );
          res.status(200).json(updatedCart)
} catch (err) { 
          res.status(500).json(err)
}

})

//Delete
router.delete('/:id', verifyTokenAuth, async (req, res) => {
          try {
          await Cart.findByIdAndDelete(req.params.id);
          res.status(200).json("Cartd")
} catch(err) {
          res.status(500).json(err)
}

})

//Get user cart
router.get('/find/:userId', verifyTokenAuth, async (req, res) => {
          try {
          const cart = await Cart.findOne({userId: req.params.userId});
          res.status(200).json(cart)
} catch(err) {
          res.status(500).json(err)
}
})

// GET ALL DATA
router.get('/', verifyTokenAdmin, async (req, res) => {
          try {
                    const carts = await Cart.find();
                    res.status(200).json(carts)
          } catch(err) {
          res.status(500).json(err)
          }
})





module.exports = router       