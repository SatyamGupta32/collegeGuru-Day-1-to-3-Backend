const express = require('express');
const { getUserById, filterUsers, createUser, updateUser } = require('../controller/userController');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

// Get a user by ID
router.get('/users/:id', getUserById);

// Get all users with search and filter options
router.get('/users', filterUsers);

// Create a new user
router.post('/users', createUser);

// Update user (only accessible to admins)
router.put('/users/:id', checkAdmin, updateUser);

module.exports = router;