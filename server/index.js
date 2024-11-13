require('dotenv').config({ path: '../.env.local' });
const express = require('express');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/collegeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database and load sample data
connectDB();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/colleges', collegeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
