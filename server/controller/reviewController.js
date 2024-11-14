const College = require('../models/college');
const Review = require('../models/review');

// Add a review to a college
const addReview = async (req, res) => {
    try {
        // Extract the collegeId and userId from the request parameters
        const { collegeId, id: userId } = req.params;
        const { rating, review } = req.body;

        // Validate the userId: Ensure it's provided
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Validate the review content
        if (!rating || !review) {
            return res.status(400).json({ message: 'Rating and review are required' });
        }

        // Check if the college exists
        const college = await College.findById(collegeId);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }

        // Create the new review object and save it in the Review schema
        const newReview = new Review({
            collegeId: collegeId,
            userId: userId,
            rating: rating,
            review: review
        });

        await newReview.save();

        college.reviews.push(newReview._id);
        await college.save();

        // Send the response
        res.json({ message: 'Review added', review: newReview, college });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get reviews for a specific college
const getReviews = async (req, res) => {
    try {
        // Extract collegeId from the request parameters
        const college = await College.findById(req.params.collegeId).populate({
            path: 'reviews',
            select: 'review rating userId',
            populate: {
                path: 'userId',
                select: 'name'  // Optionally populate user name or any other fields
            }
        });

        if (!college) return res.status(404).json({ message: 'College not found' });

        res.json(college.reviews);  // Send the list of reviews with populated user data
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addReview, getReviews };
