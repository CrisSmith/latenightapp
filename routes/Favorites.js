const express = require('express');
let router = express.Router();
let {list,create,remove,update,show} = require('../controllers/favorites');

router.get('/favorites', list);
router.get('/favorites/:id', show)
router.post('/favorites', create);
router.put('/favorites/:id',update)
router.delete('/favorites/:id',remove)


module.exports = router