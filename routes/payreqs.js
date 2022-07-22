const express = require('express');
const router = express.Router();

const payreqsHandler = require('./handler/payreqs');
const verifyToken = require('../middlewares/verifyToken');

router.get('/bucs', payreqsHandler.getBucs);
router.get('/bucs/:id', payreqsHandler.getBucById);
router.post('/bucs', payreqsHandler.createBuc);
router.put('/bucs/:id', payreqsHandler.updateBuc);
router.delete('/bucs/:id', payreqsHandler.destroyBuc);

// router.post('/', payreqsHandler.createPayreq);
// router.get('/', payreqsHandler.getPayreqs);
// router.get('/:id', payreqsHandler.getPayreqById);
// router.put('/:id', payreqsHandler.updatePayreq);
// router.delete('/:id', payreqsHandler.destroyPayreq);

module.exports = router;
