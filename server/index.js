const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/collegeRoutes');
const collegesData = require('./collegeData');
const College = require('./models/college'); 

const app = express();
const port = 3000; 

mongoose.connect('mongodb://localhost:27017/colleges')
.then(() => {
    console.log('MongoDB connected');
    return College.insertMany(collegesData);
})
    .catch(err => console.error('MongoDB connection error', err));

app.use(bodyParser.json());

app.use('/api', collegeRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
