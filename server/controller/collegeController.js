// server/controller/collegeController.js
const College = require('../models/college');

// Get a college by ID (detailed data)
const dataById = async (req, res) => {
    const collegeId = req.params.id;
    try {
        const college = await College.findById(collegeId);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json(college);
    } catch (error) {
        console.error('Error fetching college:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get colleges with filters for name, city, and courses
const filterData = async (req, res) => {
    const filter = {};
    if (req.query.name) filter.name = { $regex: req.query.name, $options: 'i' };
    if (req.query.city) filter.city = { $regex: req.query.city, $options: 'i' };
    if (req.query.courses) filter.courses = { $in: req.query.courses.split(',') };

    try {
        const colleges = await College.find(filter);
        res.json(colleges);
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({ message: 'Error fetching colleges' });
    }
};

// Get all colleges
const getAllData = async (req, res) => {
    try {
        const colleges = await College.find({});
        res.json(colleges);
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({ message: 'Error fetching colleges' });
    }
};

// Create a new college
const createCollege = async (req, res) => {
    const college = new College(req.body);
    try {
        await college.save();
        res.status(201).json({ message: 'College created successfully', college });
    } catch (error) {
        console.error('Error creating college:', error);
        res.status(500).json({ message: 'Error creating college' });
    }
};

// Update a college by ID
const updateCollege = async (req, res) => {
    const collegeId = req.params.id;
    try {
        const college = await College.findByIdAndUpdate(collegeId, req.body, { new: true });
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json({ message: 'College updated successfully', college });
    } catch (error) {
        console.error('Error updating college:', error);
        res.status(500).json({ message: 'Error updating college' });
    }
};

module.exports = {
    dataById,
    filterData,
    getAllData,
    createCollege,
    updateCollege
};
