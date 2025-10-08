
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './profile.css';

// const EmployeeProfile = () => {
//   const [profile, setProfile] = useState({ username: '', email: '' });
//   const [postedJobs, setPostedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const handleDelete = async (jobId) => {
//     if (window.confirm("Are you sure you want to delete this job?")) {
//       try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`http://localhost:5000/api/jobsposting/${jobId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setPostedJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
//         alert("Job deleted successfully");
//       } catch (error) {
//         alert("Failed to delete job");
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         // Fetch profile info
//         const profileRes = await axios.get('http://localhost:5000/api/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const { username, email } = profileRes.data.user;
//         setProfile({ username, email });

//         // Fetch jobs posted by this user
//         const jobsRes = await axios.get('http://localhost:5000/api/jobsposting/my-jobs', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPostedJobs(jobsRes.data);
//       } catch (err) {
//         console.error("Failed to fetch profile or jobs", err);
//         setProfile({ username: '', email: '' });
//         setPostedJobs([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/login');
//   };

//   if (loading) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <h1>Employee Profile</h1>
//       <p><strong>Username:</strong> {profile.username}</p>
//       <p><strong>Email:</strong> {profile.email}</p>

//       <h2>Your Posted Jobs</h2>
//       {postedJobs.length > 0 ? (
//         postedJobs.map((job) => (
//           <div key={job._id} className="job-card">
//             <h3>{job.title}</h3>
//             <p><strong>Company:</strong> {job.company}</p>
//             <p><strong>Location:</strong> {job.location}</p>
//             <p><strong>Type:</strong> {job.type}</p>
//             <p><strong>Salary:</strong> {job.salary || 'Not specified'}</p>
//             <p><strong>Description:</strong> {job.description}</p>
//             <button className="delete-btn" onClick={() => handleDelete(job._id)}>Delete</button>
//           </div>
//         ))
//       ) : (
//         <p>You have not posted any jobs yet.</p>
//       )}

//       <button className="profile-signout-btn" onClick={handleSignOut}>Sign Out</button>
//     </div>
//   );
// };

// export default EmployeeProfile;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState({ username: "", email: "" });
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedbackInput, setFeedbackInput] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/jobsposting/${jobId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPostedJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        alert("Job deleted successfully");
      } catch (error) {
        alert("Failed to delete job");
        console.error(error);
      }
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/feedback",
        { feedback: feedbackInput },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFeedbackMessage("Thank you for your feedback!");
      setFeedbackInput("");
    } catch (err) {
      setFeedbackMessage("Failed to submit feedback.");
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");

        const profileRes = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { username, email } = profileRes.data.user;
        setProfile({ username, email });

        const jobsRes = await axios.get("http://localhost:5000/api/jobsposting/my-jobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPostedJobs(jobsRes.data);
      } catch (err) {
        console.error("Failed to fetch profile or jobs", err);
        setProfile({ username: "", email: "" });
        setPostedJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h1>Employee Profile</h1>
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>

      <h2>Your Posted Jobs</h2>
      {postedJobs.length > 0 ? (
        postedJobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p>
              <strong>Company:</strong> {job.company}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Type:</strong> {job.type}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary || "Not specified"}
            </p>
            <p>
              <strong>Description:</strong> {job.description}
            </p>
            <button className="delete-btn" onClick={() => handleDelete(job._id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>You have not posted any jobs yet.</p>
      )}

      <form onSubmit={handleFeedbackSubmit} className="feedback-form">
        <h2>Submit Your Feedback</h2>
        <textarea
          value={feedbackInput}
          onChange={(e) => setFeedbackInput(e.target.value)}
          rows="4"
          required
          placeholder="What do you think about JobEasy?"
        />
        <button type="submit">Submit Feedback</button>
        <p>{feedbackMessage}</p>
      </form>

      <button className="profile-signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default EmployeeProfile;
