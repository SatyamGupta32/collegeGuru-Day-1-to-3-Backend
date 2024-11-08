require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const College = require('../models/college');
const User = require('../models/user');
const collegesData = require('../data/collegeData');
const userData = require('../data/userData');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/colleges');
        console.log('MongoDB connected');

        // Insert sample data for colleges if the collection is empty
        const collegeCount = await College.countDocuments();
        if (collegeCount === 0) {
            await College.insertMany(collegesData);
            console.log('Sample colleges added');
        }

        // Insert sample data for users (without tokens initially)
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            await User.insertMany(userData);
            console.log('Sample users added');
        }
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDB;
