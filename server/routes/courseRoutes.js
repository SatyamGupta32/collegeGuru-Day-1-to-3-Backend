const express = require('express');
const router = express.Router();
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, } = require('../controller/courseController');
const validateRequest = require('../middleware/validateRequest'); // if you need request validation
const checkAdmin = require('../middleware/checkAdmin') // if you need role-based access control

// GET all courses
router.get('/', getAllCourses);

// GET a single course by ID
router.get('/:id', getCourseById);

// POST a new course
router.post('/', checkAdmin, validateRequest, createCourse);

// PUT to update a course by ID
router.put('/:id', checkAdmin, validateRequest, updateCourse);

// DELETE a course by ID
router.delete('/:id', checkAdmin, deleteCourse);

module.exports = router;
