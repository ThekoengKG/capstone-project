var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    prod_id: Number,
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    created_at: {
        type: Date,
        default: Date.now
    } 
}, {versionKey: false});

module.exports = mongoose.model('Product', productSchema);
