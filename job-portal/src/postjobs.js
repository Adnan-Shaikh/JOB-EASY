import React from "react";
import './postjob.css'
const PostJob = () => {
  return (
    <div className="post-job-container">
      <h1>Post a Job</h1>
      <form className="post-job-form">
        {/* Job Title */}
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" placeholder="e.g. Café Assistant" required />
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" placeholder="e.g. Coffee & Co." required />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="e.g. Boisar, Maharashtra" required />
        </div>

        {/* Job Type */}
        <div className="form-group">
          <label>Job Type</label>
          <select required>
            <option value="">Select Job Type</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
          </select>
        </div>

        {/* Salary */}
        <div className="form-group">
          <label>Salary (Optional)</label>
          <input type="text" placeholder="e.g. ₹8,000/month" />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Job Description</label>
          <textarea placeholder="Write about responsibilities, timings, requirements..." rows="5" required></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
