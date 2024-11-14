require('dotenv').config({ path: '../.env.local' });
const express = require('express');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/collegeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database and load sample data
connectDB();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/colleges', collegeRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);
app.use('/courses', courseRoutes);
// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
