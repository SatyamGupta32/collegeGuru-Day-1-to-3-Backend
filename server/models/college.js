// models/college.js
const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    established: { type: Number },
    rating: { type: Number },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

module.exports = mongoose.model('College', collegeSchema);