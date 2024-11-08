require('dotenv').config({ path: '../.env.local' });
console.log(process.env.NODE_ENV );

const express = require('express');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/collegeRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');  // Import the database connection

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database and load sample data
connectDB();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Bypass authentication and role checks in development
if (process.env.NODE_ENV === 'development nodemon index.js') {
    console.log('Bypassing authentication in development mode');
    // Example: Mock user for development purposes (this will be available in `req.user`)
    app.use((req, res, next) => {
        req.user = { id: 1, role: 'admin' };  // Mock user data for development
        next();
    });
}

// Routes
app.use('/api/colleges', collegeRoutes);  
app.use('/api/users', userRoutes);  

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
