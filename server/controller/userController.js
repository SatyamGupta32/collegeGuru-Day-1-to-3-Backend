const User = require('../models/user');

// Get a user by ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            message: 'User retrieved successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture,
                preferences: user.preferences,
                notifications: user.notifications,
            },
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error while fetching user' });
    }
};

// Get all users with optional filters for role, name, or email
const filterUsers = async (req, res) => {
    const filter = {};

    // Apply filters based on query parameters
    if (req.query.role) filter.role = req.query.role;
    if (req.query.name) filter.name = { $regex: req.query.name, $options: 'i' };  // Case-insensitive search
    if (req.query.email) filter.email = { $regex: req.query.email, $options: 'i' };  // Case-insensitive search

    try {
        // Query the database to find users matching the filters
        const users = await User.find(filter).select('-password'); // Exclude password field
        res.json({
            message: 'Users retrieved successfully',
            users,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error while fetching users' });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { name, email, password, role, profilePicture, preferences, notifications } = req.body;

    // Construct user data with defaults for optional fields
    const userData = {
        name,
        email,
        password,
        role: role || 'student', // Default to 'student' if role not provided
        profilePicture: profilePicture || '', // Optional, default to an empty string
        preferences: {
            savedCourses: preferences?.savedCourses || [], // Optional, default to an empty array
            savedColleges: preferences?.savedColleges || [], // Optional, default to an empty array
        },
        notifications: notifications || [], // Optional, default to an empty array
    };

    const user = new User(userData);

    try {
        await user.save();
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture,
                preferences: user.preferences,
                notifications: user.notifications,
            },
        });
    } catch (error) {
        console.error('Error creating user:', error);

        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        res.status(500).json({ message: 'Server error while creating user' });
    }
};

// Update user by ID (only accessible to admins)
const updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            message: 'User updated successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture,
                preferences: user.preferences,
                notifications: user.notifications,
            },
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error while updating user' });
    }
};

module.exports = {
    getUserById,
    filterUsers,
    createUser,
    updateUser
};
