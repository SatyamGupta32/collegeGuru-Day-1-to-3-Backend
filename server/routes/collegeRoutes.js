const express = require('express');
const College = require('../models/college');


const router = express.Router();
router.get('/colleges/:id', async (req, res) => {
    const collegeId = req.params.id;
    try {
      const college = await College.findById(collegeId);
      if (!college) {
        return res.status(404).json({   
   message: 'College not found' });
      }
      console.log('College:', college);
      res.json(college);
    } catch (error) {
      console.error('Error fetching college:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

router.get('/colleges', (req, res) => {
    College.find({}, (err, colleges) => {
        if (err) {
            res.status(500).send('Error fetching colleges');
        } else {
            res.json(colleges);
        }
    });
});

router.post('/colleges', (req, res) => {
    const college = new College(req.body);
    college.save((err, college) => {
        if (err) {
            res.status(500).send('Error creating college');
        } else {
            res.json(college);
        }
    });
});

module.exports = router;
