const express = require('express');
const { dataById, filterData, createCollege, updateCollege } = require('../controller/collegeController');
const checkCollegeAdmin = require('../middleware/checkCollegeAdmin');
const errorHandler = require('../middleware/errorHandler');

const router = express.Router();

// Public routes
router.get('getCollege/:id', dataById);
router.get('/filterColege', filterData);

// Admin-only routes
router.post('/createCollege', checkCollegeAdmin, createCollege);
router.put('/updateCollege/:id', checkCollegeAdmin, updateCollege);

// Error handler
router.use(errorHandler);

module.exports = router;
