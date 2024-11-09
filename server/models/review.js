const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
