const mongoose = require('mongoose')

let favoriteSchema = new mongoose.Schema({
    name: String,
    food_type: String,
    img_url: String,
    breakfast: Boolean,
    hood: String,
    phone: String,
    delivery: Array
});



let Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite
 
