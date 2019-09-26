const express = require('express');
let router = express.Router();
let {list,create, remove, show} = require('../controllers/items');

router.get('/items', list);
router.post('/items', create);
router.delete('/items/:id',remove)
router.get('/items/:id', show)

module.exports = router