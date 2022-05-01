const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');
const Product = require('../models/Product');

//Create Product
router.post('/', verifyTokenAdmin, async (req, res) => {
          const newProduct = new Product(req.body);
          try {
                    const savedProduct = await new newProduct.save();
                    res.status(200).json(savedProduct)
          } catch(err) {
                    res.status(500).json(err)
          }

}),




module.exports = router       