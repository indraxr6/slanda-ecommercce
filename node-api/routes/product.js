const router = require('express').Router();

const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');
const Product = require('../models/Product');


//Create Product
router.post('/', verifyTokenAuth, async (req, res) => {
          const newProduct = new Product(req.body);
          try {
                    const savedProduct = await new newProduct.save();
                    res.status(200).json(savedProduct)
                    
          } catch(err) {
                    res.status(500).json(err)
          }
}),

//Update
router.put('/:id', verifyTokenAdmin, async (req, res) => {
          try {
          const updatedProduct = await Product.findByIdAndUpdate(req.params.id,  
          {
                    $set: req.body,
          },{new: true}
          );
          res.status(200).json(updatedProduct)
          res.send(updatedProduct).json
} catch (err) { 
          res.status(500).json(err)
}

})

//Delete
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
          try {
          await Product.findByIdAndDelete(req.params.id);
          res.status(200).json("Product deleted")
} catch(err) {
          res.status(500).json(err)
}

})

//Get product by id
router.get('/find/:id', async (req, res) => {
          try {
          const product = await Product.findById(req.params.id);
          res.status(200).json(product)
} catch(err) {
          res.status(500).json(err)
}
})

// GET ALL Product
router.get('/', async (req, res) => {
          const queryNew = req.query.new;
          const queryCategory = req.query.category ;
          try {
                    let products;
                    if (queryNew) {
                              products = await Product.find().sort({createdAt: -1}).limit(5)
                    } else if(queryCategory) {
                              products = await Product.find({categories: {
                                        $in: [queryCategory]
                              }                  
                    })

                    } else {
                              products = await Product.find()
                    }
                    res.status(200).json(products);
          } catch (err){
                    res.status(500).json(err)
          }
})




module.exports = router       