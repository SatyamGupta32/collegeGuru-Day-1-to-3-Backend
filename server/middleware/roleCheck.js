const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

// Middleware that checks if the user has the required role
const checkRole = (role) => {
  return async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
      // Verify the token and get the decoded data
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Fetch the user from the database
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Attach the user to the request object
      req.user = user;

      // Check if the user has the required role
      if (role && user.role !== role) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      // Continue to the next middleware or route handler
      next();

    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Invalid token' });
    }
  };
};

module.exports = checkRole;
