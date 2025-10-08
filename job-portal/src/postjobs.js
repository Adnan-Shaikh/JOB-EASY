import React, { useState } from "react";
import axios from "axios"; // npm install axios
import './postjob.css';

const PostJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token'); // get token from localStorage
    const res = await axios.post(
      "http://localhost:5000/api/jobsposting",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`, // pass token in headers
        },
      }
    );
    alert("Job posted successfully!");
    setForm({
      title: "",
      company: "",
      location: "",
      type: "",
      salary: "",
      description: "",
    });
  } catch (err) {
    alert("Failed to post job.");
    console.error(err.response?.data || err.message);
  }
};


  return (
    <div className="post-job-container">
      <h1>Post a Job</h1>
      <form className="post-job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" name="title" placeholder="e.g. Café Assistant" required value={form.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" name="company" placeholder="e.g. Coffee & Co." required value={form.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" placeholder="e.g. Boisar, Maharashtra" required value={form.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Job Type</label>
          <select name="type" required value={form.type} onChange={handleChange}>
            <option value="">Select Job Type</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>
        <div className="form-group">
          <label>Salary (Optional)</label>
          <input type="text" name="salary" placeholder="e.g. ₹8,000/month" value={form.salary} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Job Description</label>
          <textarea name="description" placeholder="Write about responsibilities, timings, requirements..." rows="5" required value={form.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-btn">Post Job</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default PostJob;
