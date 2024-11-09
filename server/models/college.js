const mongoose = require('mongoose');
const reviewSchema = require('./review');  // Ensure review schema is imported

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Ensuring name is required
        minlength: 3,    // Minimum length for name
    },
    city: {
        type: String,
        required: true,  // Ensuring city is required
    },
    state: {
        type: String,
        required: true,  // Ensuring state is required
    },
    courses: {
        type: [String],
        required: true,  // Ensure courses are provided
    },
    established: {
        type: Number,
        required: true,  // Ensuring the year is provided
    },
    rating: {
        type: Number,
        required: true,
        min: 1,  // Rating should be between 1 and 5
        max: 5,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',  // Reference to the Review model
    }],
}, { timestamps: true });

module.exports = mongoose.model('College', collegeSchema);
