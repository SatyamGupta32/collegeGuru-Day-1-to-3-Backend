const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: String,
    city: String,
    state: String,
    courses: [String],
    established: Number,
    rating: Number,
    reviews: [{
        user: String,
        rating: Number,
        review: String
    }]
});

module.exports = mongoose.model('Colleges', collegeSchema);
