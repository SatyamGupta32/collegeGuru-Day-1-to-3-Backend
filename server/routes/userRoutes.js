const express = require('express');
const { getUserById, filterUsers, createUser, updateUser } = require('../controller/userController');
const validateRequest = require('../middleware/validateRequest');
const errorHandler = require('../middleware/errorHandler');
const checkRole = require('../middleware/roleCheck'); // For other roles if needed
const checkAdmin = require('../middleware/checkAdmin'); // Admin-specific access

const router = express.Router();

// Get a user by ID (accessible to the user themselves and admins)
router.get('/users/:id', checkRole('user'), getUserById);

// Get all users with search and filter options (accessible to admins only)
router.get('/users', checkAdmin, filterUsers);

// Create a new user (no role restriction, but request validation)
router.post('/users', validateRequest, createUser);

// Update user (only accessible to admins)
router.put('/users/:id', checkAdmin, validateRequest, updateUser);

// Use error handler middleware to catch all errors
router.use(errorHandler);

module.exports = router;
