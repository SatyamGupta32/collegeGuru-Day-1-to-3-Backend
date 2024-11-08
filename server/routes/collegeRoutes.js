const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkAdmin = require('../middleware/checkAdmin');
const errorHandler = require('../middleware/errorHandler');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/:id', dataById);
router.get('/', filterData);

// Admin-only routes
router.post('/', verifyToken, checkAdmin, createCollege);
router.put('/:id', verifyToken, checkAdmin, updateCollege);

// Error handler
router.use(errorHandler);

module.exports = router;
