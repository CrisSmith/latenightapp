const dotenv = require('dotenv');
dotenv.config();
const express= require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const ItemRoutes = require('./routes/Items')


mongoose.connect(process.env.mongodburi,{useNewUrlParser: true}).then(console.log("Connected to database.."))
.catch(err=>console.log(err))
mongoose.set('useFindAndModify', false);
let app = express();

app.use(bodyParser.json());
app.use(ItemRoutes)
app.use(express.static('client/public'));



const PORT = process.env.PORT || 4000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here", err)
    };
        console.log("Server is listening on port 4000...")
})