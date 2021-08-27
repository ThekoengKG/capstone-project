var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

/*Get all products*/
router.get('/', (req,res) => {
    Product.find((err,data) => {
        if(err) throw err;
        res.send(data);
    })
});


router.get('/:id', (req,res) => {
    Product.findById(req.params.id, (err,data) => {
        if(err) throw err;
        res.send(data);
    })
});

router.post('/', (req, res) => {
    Product.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = router;