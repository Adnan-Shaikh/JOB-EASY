// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios"; // npm install axios
// import "./findjobs.css";

// const FindJobs = () => {
//   const [jobsData, setJobsData] = useState([]); // will hold jobs from backend
//   const [filters, setFilters] = useState({ type: "All", location: "" });

//   // Fetch jobs from backend when component mounts
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/jobsposting");
//         setJobsData(res.data);
//       } catch (err) {
//         console.error("Failed to fetch jobs", err);
//       }
//     };
//     fetchJobs();
//   }, []);

//   const filteredJobs = useMemo(() => {
//     let results = jobsData;
//     if (filters.type !== "All") {
//       results = results.filter((job) => job.type === filters.type);
//     }
//     if (filters.location.trim() !== "") {
//       results = results.filter((job) =>
//         job.location.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }
//     return results;
//   }, [jobsData, filters]);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   return (
//     <div className="find-jobs-page">
//       {/* Sidebar Filters */}
//       <div className="filter-section">
//         <h3>Filters</h3>
//         <label>Job Type</label>
//         <select name="type" value={filters.type} onChange={handleFilterChange}>
//           <option value="All">All</option>
//           <option value="Full-time">Full-time</option>
//           <option value="Part-time">Part-time</option>
//         </select>

//         <label>Location</label>
//         <input
//           type="text"
//           name="location"
//           placeholder="Enter city"
//           value={filters.location}
//           onChange={handleFilterChange}
//         />
//       </div>

//       {/* Job Listings */}
//       <div className="jobs-list">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => (
//             <div key={job._id} className="job-card">
//               <h3>{job.title}</h3>
//               <p>
//                 <strong>Location:</strong> {job.location}
//               </p>
//               <p>
//                 <strong>Type:</strong> {job.type}
//               </p>
//               <p>
//                 <strong>Salary:</strong> {job.salary || "Not specified"}
//               </p>
//               <button className="details-btn">View Details</button>
//             </div>
//           ))
//         ) : (
//           <p>No jobs found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FindJobs;
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./findjobs.css";

const FindJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filters, setFilters] = useState({ type: "All", location: "" });
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Fetch jobs from backend when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobsposting");
        setJobsData(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
    fetchJobs();
  }, []);

  // Filter logic for jobs
  const filteredJobs = useMemo(() => {
    let results = jobsData;
    if (filters.type !== "All") {
      results = results.filter((job) => job.type === filters.type);
    }
    if (filters.location.trim() !== "") {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    return results;
  }, [jobsData, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Toggle job details expansion
  const toggleDetails = (id) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  return (
    <div className="find-jobs-page">
      {/* Sidebar Filters */}
      <div className="filter-section">
        <h3>Filters</h3>
        <label>Job Type</label>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter city"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </div>

      {/* Job Listings */}
      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Salary:</strong> {job.salary || "Not specified"}</p>
              <button className="details-btn" onClick={() => toggleDetails(job._id)}>
                {expandedJobId === job._id ? "Hide Details" : "View Details"}
              </button>
              {expandedJobId === job._id && (
                <div className="job-details">
                  <p><strong>Description:</strong> {job.description}</p>
                  {/* Add more job details here if needed */}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default FindJobs;
