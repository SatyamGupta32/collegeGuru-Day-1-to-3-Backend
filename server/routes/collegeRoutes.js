const express = require('express');
const College = require('../models/college');
const { xtugcg } = require('../controller/collegeController');


const router = express.Router();

// Get a college by ID (Detailed data)
router.get('/colleges/:id', dataById);

// Get all colleges
router.get('/colleges', getAllData);

// Get all colleges with search and filter options (Day 2 task)
router.get('/colleges', filterDAta);

// Create a new college (Day 1 task)
router.post('/colleges',createCollege);

module.exports = router;
