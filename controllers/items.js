const Item = require('../models/ItemModel')

exports.list = function list(req,res){
    Item.find(function(err,items){
         if(err)
             console.log(err);
        else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.json(items)
        }  
    })
};
exports.create = function create(req,res){
    let newItem = new Item(req.body);
    newItem.save()
    res.json(newItem)
}
exports.show = function show(req,res){
    Item.findById(req.params.id,function(err,item){
        if(err)
            console.log(err);
          else{
            res.json(item)  
          }  
    })
};
exports.update = function update(req,res){
    Item.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true},function(err,item){
        if(err){
            console.log(err)
        }
        res.json(item)   
    }); 
};
exports.remove = function remove(req,res){
    Item.findByIdAndRemove(req.params.id, function (err, item) {
        if(err)
            console.log(err);
            else{
                res.json("removed: " + item)
            }
    });
}
