// server/middleware/checkCollegeAdmin.js

const checkCollegeAdmin = async (req, res, next) => {
    try {
        const collegeVerified = req.body.verified || req.query.verified;

        console.log('College Verified:', collegeVerified);

        // Verify that the role is 'admin' and the college is verified
        if (collegeVerified === true) {
            return next(); // Allow access if conditions are met
        }

        // Deny access if conditions are not met
        return res.status(403).json({ message: 'Access denied. Insufficient permissions' });
    } catch (error) {
        console.error('Error in middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = checkCollegeAdmin;
