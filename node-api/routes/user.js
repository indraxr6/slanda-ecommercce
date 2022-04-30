const router = require('express').Router();
router.get('/testing', (req, res) => {
          res.send('testing user');

});

module.export = router