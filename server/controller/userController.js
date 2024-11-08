const jwt = require('jsonwebtoken');
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
    if (req.query.role) filter.role = req.query.role;
    if (req.query.name) filter.name = { $regex: req.query.name, $options: 'i' };
    if (req.query.email) filter.email = { $regex: req.query.email, $options: 'i' };

    try {
        const users = await User.find(filter);
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
};

// Generate a token for a new user
const generateToken = (user) => {
    const payload = { id: user._id, role: user.role };
    return jwt.sign(payload, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1d' });
};

// Create a new user with token generation
const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        
        // Generate and add token
        const token = generateToken(user);
        user.token = token;
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error); // Logs the full error
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
