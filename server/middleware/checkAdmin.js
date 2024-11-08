const checkAdmin = async (req, res, next) => {
    try {
        const userRole = req.headers['x-user-role']; // Extract role from headers
        console.log('User Role:', userRole);  // Log role for debugging

        if (!userRole) {
            return res.status(400).json({ message: 'Role not provided' });
        }

        // Allow access only if the role is 'admin'
        if (userRole === 'admin') {
            return next(); 
        }

        // Deny access for any other role
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    } catch (error) {
        console.error('Error in checkAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = checkAdmin;
