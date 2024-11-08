const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkAdmin = require('../middleware/checkAdmin');
const errorHandler = require('../middleware/errorHandler');

const router = express.Router();

// Public routes
router.get('/colleges/:id', dataById);
router.get('/colleges', filterData);

// Admin-only routes
router.post('/colleges', checkAdmin, createCollege);
router.put('/colleges/:id', checkAdmin, updateCollege);

// Error handler
router.use(errorHandler);

module.exports = router;
