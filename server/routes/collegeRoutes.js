const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

// Get a college by ID
router.get('/colleges/:id', dataById);

// Get all colleges with search and filter options
router.get('/colleges', filterData);

// Create a new college
router.post('/colleges', createCollege);

// Update college (only accessible to admins)
router.put('/colleges/:id', checkAdmin, updateCollege);

module.exports = router;
