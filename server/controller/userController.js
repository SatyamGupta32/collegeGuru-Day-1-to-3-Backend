const User = require('../models/user');

// Get a user by ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server Error' });
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
        const users = await User.find(filter);
        res.json(users);  // Respond with the filtered users
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Error creating user' });
    }
};

// Update user by ID (only accessible to admins)
const updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
};

module.exports = {
    getUserById,
    filterUsers,
    createUser,
    updateUser
};
