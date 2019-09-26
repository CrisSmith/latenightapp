const mongoose = require('mongoose')

let itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean
});



let Item = mongoose.model('Item', itemSchema);

module.exports = Item
 
