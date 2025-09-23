const express = require('express');
const router = express.Router();
const Job = require('../models/postedjobs');

// Create a new job (POST /api/jobs)
router.post('/', async (req, res) => {
  try {
    const { title, company, location, type, salary, description } = req.body;
    const job = new Job({ title, company, location, type, salary, description });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Failed to post job', error: error.message });
  }
});

// (Later we'll add a GET route for fetching all jobs)

module.exports = router;
