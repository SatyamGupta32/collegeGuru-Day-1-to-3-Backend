const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/collegeRoutes');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const collegesData = require('./collegeData');
const userData = require('./userData');
const College = require('./models/college');
const User = require('./models/user');

const app = express();
const port = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/colleges', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(async () => {
        console.log('MongoDB connected');

        // Insert sample data for colleges
        const collegeCount = await College.countDocuments();
        if (collegeCount === 0) {
            await College.insertMany(collegesData)
                .then(() => console.log('Sample colleges added'))
                .catch(err => console.error('Error adding sample colleges:', err));
        }

        // Insert sample data for users
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            await User.insertMany(userData)
                .then(() => console.log('Sample users added'))
                .catch(err => console.error('Error adding sample users:', err));
        }
    })
    .catch(err => console.error('MongoDB connection error', err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', collegeRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
