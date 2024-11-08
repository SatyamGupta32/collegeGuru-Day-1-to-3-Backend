const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get the token from the Authorization header (Bearer token)
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Attach the decoded user data to the request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = verifyToken;
