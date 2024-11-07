const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkAdmin = require('../middleware/checkAdmin');
const errorHandler = require('../middleware/errorHandler');

const router = express.Router();

// Get a college by ID (accessible to all users)
router.get('/colleges/:id', dataById);

// Get all colleges with search and filter options (accessible to all users)
router.get('/colleges', filterData);

// Create a new college (only accessible to admins)
router.post('/colleges', checkAdmin, createCollege);

// Update college (only accessible to admins)
router.put('/colleges/:id', checkAdmin, updateCollege);

// Use error handler middleware to catch all errors
router.use(errorHandler);

module.exports = router;
