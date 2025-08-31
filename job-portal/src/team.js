import React from "react";
import "./home.css";

const Team = () => {
  const members = [
    { name: "Adnan Shaikh", role: "Founder, Front end Developer", img: "/Adnan.png" },
    { name: "Mohammad Memon", role: "Nalla bimaar Aadmi", img: "/pexels-linzfrancis-3379613-removebg-preview.png" },
    { name: "Rahul Gupta", role: "Kaam Chor Media Team", img: "/Rahul.png" },
    { name: "Chetan Khamkar", role: "Legal Advisor", img: "/khamkar.png" },
  ];

  return (
    <div className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {members.map((m, i) => (
          <div className="team-card" key={i}>
            <img src={m.img} alt={m.name} />
            <h2>{m.name}</h2>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
