const mongoose = require('mongoose')

let itemSchema = new mongoose.Schema({
    name: String,
    food_type: String,
    img_url: String,
    breakfast: Boolean,
    hood: String,
    phone: String,
    hdelivery: String
});



let Item = mongoose.model('Item', itemSchema);

module.exports = Item
 
