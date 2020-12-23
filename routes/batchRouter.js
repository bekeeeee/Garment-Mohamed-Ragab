const express = require('express');
const batchController = require('./../controllers/batchController');

const router = express.Router();

// Two endpoints 'get' and 'post'
router.route('/')
.get(batchController.getAllBatches)
.post(batchController.createBatch);



module.exports = router;
