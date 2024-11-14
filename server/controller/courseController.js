const Course = require('../models/course');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' });
    }
};

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create course' });
    }
};

// Update a course by ID
exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update course' });
    }
};

// Delete a course by ID
exports.deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete course' });
    }
};
