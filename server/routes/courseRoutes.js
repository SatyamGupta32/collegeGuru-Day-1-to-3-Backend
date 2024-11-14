const express = require('express');
const router = express.Router();
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, } = require('../controller/courseController');
const checkAdmin = require('../middleware/checkAdmin');

// GET all courses
router.get('/', getAllCourses);

// GET a single course by ID
router.get('/:id', getCourseById);

// POST a new course
router.post('/', checkAdmin, createCourse);

// PUT to update a course by ID
router.put('/:id', checkAdmin, updateCourse);

// DELETE a course by ID
router.delete('/:id', checkAdmin, deleteCourse);

module.exports = router;
