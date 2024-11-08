const express = require('express');
const { getUserById, filterUsers, createUser, updateUser } = require('../controller/userController');
const validateRequest = require('../middleware/validateRequest');
const checkRole = require('../middleware/roleCheck');
const errorHandler = require('../middleware/errorHandler');
const checkAdmin = require('../middleware/checkAdmin')

const router = express.Router();

// Get a user by ID (accessible to the user themselves and admins)
router.get('/:id',checkRole, getUserById);

// Get all  (admin-only access)
router.get('/',checkAdmin, filterUsers);

// Create a new user
router.post('/', validateRequest, createUser);

// Update user (admin-only)
router.put('/:id',checkAdmin, validateRequest, updateUser);

// Error handler
router.use(errorHandler);

module.exports = router;
