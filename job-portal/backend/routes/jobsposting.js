const express = require('express');
const router = express.Router();
const Job = require('../models/postedjobs');
const auth = require('../middleware/auth');

// Create a new job (POST /api/jobs)
// router.post('/', async (req, res) => {
//   try {
//     const { title, company, location, type, salary, description } = req.body;
//     const job = new Job({ title, company, location, type, salary, description });
//     await job.save();
//     res.status(201).json({ message: 'Job posted successfully', job });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to post job', error: error.message });
//   }
// });

router.post('/', auth, async (req, res) => {
  try {
    const { title, company, location, type, salary, description } = req.body;
    const job = new Job({
      title,
      company,
      location,
      type,
      salary,
      description,
      postedBy: req.user.id  // add user ID here from token
    });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Failed to post job', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 }); // fetch all jobs, newest first
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs', error: error.message });
  }
});

router.get('/my-jobs', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user.id }).sort({ postedAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs', error: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Delete by id instead of removing document instance
    await Job.findByIdAndDelete(req.params.id);

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
