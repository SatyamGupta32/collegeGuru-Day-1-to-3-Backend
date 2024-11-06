const College = require('../models/college');


// Get a college by ID (Detailed data)
const dataById = async (req, res) => {
    const collegeId = req.params.id;
    try {
        const college = await College.findById(collegeId);
        if (!college) {
            return res.status(404).json({
                message: 'College not found'
            });
        }
        console.log('College:', college);
        res.json(college);
    } catch (error) {
        console.error('Error fetching college:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Get all colleges
const filterData = async (req, res) => {
    const filter = {};

    if (req.query.name) filter.name = { $regex: req.query.name, $options: 'i' };
    if (req.query.city) filter.city = { $regex: req.query.city, $options: 'i' };
    if (req.query.courses) filter.courses = { $in: req.query.courses.split(',') };

    // console.log("Filter applied:", filter);
    try {
        const colleges = await College.find(filter);
        res.json(colleges);
    } catch (err) {
        console.error('Error fetching colleges:', err);
        res.status(500).json({ message: 'Error fetching colleges' });
    }
}

// Get all colleges with search and filter options (Day 2 task)
const getAllData = async (req, res) => {
    try {
        const colleges = await College.find({});
        res.json(colleges);
    } catch (err) {
        res.status(500).send('Error fetching colleges');
    }
}

// Create a new college (Day 1 task)
const createCollege = async (req, res) => {
    const college = new College(req.body);
    college.save((err, college) => {
        if (err) {
            res.status(500).send('Error creating college');
        } else {
            res.json(college);
        }
    });
}

module.exports = {dataById,filterData, getAllData, createCollege};