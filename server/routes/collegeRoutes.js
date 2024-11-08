const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkAdmin = require('../middleware/checkAdmin');
const errorHandler = require('../middleware/errorHandler');

const router = express.Router();

// Public routes
router.get('/:id', dataById);
router.get('/', filterData);

// Admin-only routes
router.post('/', checkAdmin, createCollege);
router.put('/:id', checkAdmin, updateCollege);

// Error handler
router.use(errorHandler);

module.exports = router;
