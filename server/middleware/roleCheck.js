const checkRole = async (req, res, next) => {
    try {
      const userRole = await req.headers['x-user-role']; 
      console.log('User Role:', userRole); 
    
      if (!userRole) {
        return res.status(400).json({ message: 'Role not provided' });  // Return if no role is provided
      }
  
      if (userRole === 'user' || userRole === 'admin') {
        return next();
      }
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    } catch (error) {
      console.error('Error in checkRole middleware:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  module.exports = checkRole;