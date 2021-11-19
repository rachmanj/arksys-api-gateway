const express = require('express');
const router = express.Router();

const lessonsHandler = require('./handler/lessons');

router.post('/', lessonsHandler.create);
router.put('/:id', lessonsHandler.update);
router.delete('/:id', lessonsHandler.destroy);
router.get('/', lessonsHandler.getAll)
router.get('/:id', lessonsHandler.get);

module.exports = router;
