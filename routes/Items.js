const express = require('express');
let router = express.Router();
let {list,create,remove,update,show} = require('../controllers/items');

router.get('/items', list);
router.get('/items/:id', show)
router.post('/items', create);
router.put('/items/:id',update)
router.delete('/items/:id',remove)


module.exports = router