const express = require('express');
const { getUserById, filterUsers, createUser, updateUser } = require('../controller/userController');
const validateRequest = require('../middleware/validateRequest');
const checkRole = require('../middleware/roleCheck');
const errorHandler = require('../middleware/errorHandler');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get a user by ID (accessible to the user themselves and admins)
router.get('/:id',verifyToken, checkRole(['user', 'admin']), getUserById);

// Get all  (admin-only access)
router.get('/',verifyToken, checkRole(['admin']), filterUsers);

// Create a new user
router.post('/', validateRequest, createUser);

// Update user (admin-only)
router.put('/:id',verifyToken, checkRole(['admin']), validateRequest, updateUser);

// Error handler
router.use(errorHandler);

module.exports = router;
