
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },

    profilePicture: { type: String },
    preferences: {
        savedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
        savedColleges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'College' }]
    },
    notifications: [{ type: String }],
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);