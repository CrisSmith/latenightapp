const Favorite = require('../models/FavoriteModel')

exports.list = function list(req,res){
    Favorite.find(function(err,favorites){
         if(err)
             console.log(err);
        else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.json(favorites)
        }  
    })
};
exports.create = function create(req,res){
    let newFavorite = new Favorite(req.body);
    newFavorite.save()
    res.json(newFavorite)
}
exports.show = function show(req,res){
    Favorite.findById(req.params.id,function(err,favorite){
        if(err)
            console.log(err);
          else{
            res.json(favorite)  
          }  
    })
};
exports.update = function update(req,res){
    Favorite.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true},function(err,item){
        if(err){
            console.log(err)
        }
        res.json(favorite)   
    }); 
};
exports.remove = function remove(req,res){
    Favorite.findByIdAndRemove(req.params.id, function (err, favorite) {
        if(err)
            console.log(err);
            else{
                res.json("removed: " + favorite)
            }
    });
}
