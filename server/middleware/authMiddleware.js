const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Log NODE_ENV to ensure it's correctly set
    console.log("Environment:", process.env.NODE_ENV);

    // If it's in development, bypass token verification
    if (process.env.NODE_ENV === 'development nodemon index.js') {
        console.log('Bypassing token verification in development mode');
        // Simulating a valid user for development (remove after testing)
        req.user = { id: 'devUserId', role: 'admin' }; 
        return next(); // Proceed to next middleware/route handler
    }

    // Get the token from the Authorization header (Bearer token)
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Attach the decoded user data to the request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = verifyToken;
