const express = require('express');
const { dataById, filterData, createCollege } = require('../controller/collegeController');

const router = express.Router();

// Get a college by ID
router.get('/colleges/:id', dataById);

// Get all colleges with search and filter options
router.get('/colleges', filterData);

// Create a new college
router.post('/colleges', createCollege);

module.exports = router;
