const mongoose = require('mongoose')

let itemSchema = new mongoose.Schema({
    name: String,
    food_type: String,
    img_url: String,
    breakfast: Boolean,
    hood: String,
    menu:String,
    phone: String,
    delivery: Array
});



let Item = mongoose.model('Item', itemSchema);

module.exports = Item
 
