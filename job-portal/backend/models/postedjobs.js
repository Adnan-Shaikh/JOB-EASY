const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true }, // eg: "Full-time" or "Part-time"
  salary: { type: String }, // optional
  description: { type: String, required: true },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
