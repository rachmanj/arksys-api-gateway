const express = require('express');
const router = express.Router();

const payreqsHandler = require('./handler/payreqs');
const verifyToken = require('../middlewares/verifyToken');

router.get('/bucs', payreqsHandler.getBucs);
router.get('/bucs/:id', payreqsHandler.getBucById);
router.post('/bucs', payreqsHandler.createBuc);
router.put('/bucs/:id', payreqsHandler.updateBuc);
router.delete('/bucs/:id', payreqsHandler.destroyBuc);

router.post('/payreqs', payreqsHandler.createPayreq);
router.get('/payreqs', payreqsHandler.getPayreqs);
router.get('/payreqs/:id', payreqsHandler.getPayreqById);
router.put('/payreqs/:id', payreqsHandler.updatePayreq);
router.delete('/payreqs/:id', payreqsHandler.destroyPayreq);

module.exports = router;
