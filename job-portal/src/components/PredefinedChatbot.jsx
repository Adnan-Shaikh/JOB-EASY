import React, { useState } from "react";

const predefinedQA = {
  // Greetings
  "hello": "Hi! How can I help you with JobEasy today?",
  "hi": "Hello! Ask me anything about jobs or your account.",
  "help": "You can ask about job search, posting jobs, account, login, or support.",

  // Job Search
  "find job": "Go to 'Find Jobs' and filter as per your interest.",
  "find": "Go to 'Find Jobs' and filter as per your interest.",
  "search job": "Visit Find Jobs page, select filters and click on any job to see details.",
  "part-time jobs": "Use Find Jobs and select 'Part-time' filter to see part-time jobs.",
  "remote jobs": "Select 'Remote' in location filter on Find Jobs page to see remote jobs.",
  "job alerts": "Enable job alerts from your profile to get the latest notifications.",

  // Job Posting
  "post job": "Go to 'Post a Job', fill the form and submit. Your job goes live after review.",
  "post": "Go to 'Post a Job', fill the form and submit. Your job goes live after review.",
  "how to post job": "Click 'Post Job', enter all details, and submit.",
  "edit job posting": "Dashboard > My Job Posts > Edit.",
  "delete job post": "From dashboard, select My Job Posts and click Delete.",
  "job post approval": "Job posts are usually approved within 24 hours.",

  // Account/Auth
  "signup": "Click Signup, provide your email and password, and submit your details.",
  "create account": "Go to Signup, fill out the form, and submit.",
  "register": "Click Signup and complete the registration form.",
  "login": "Login using your registered email and password.",
  "forgot password": "Click ‘Forgot Password’ on login page and follow instructions.",
  "change password": "Go to profile settings and choose Change Password.",
  "update profile": "Click Edit Profile on your dashboard.",

  // Application Process
  "how to apply": "Click on a job listing, then hit Apply Now and follow the instructions.",
  "application status": "Check your application status under 'My Applications' in your profile.",
  "withdraw application": "Select the relevant job in My Applications and click Withdraw.",

  // Support
  "contact support": "Reach out via Contact Us page or email support@jobeasy.com. We typically respond within 24 hours.",
  "need help": "If you face any issue, contact support or ask your question here.",
  "report issue": "Report issues through the Contact Support form in your dashboard.",

  // About
  "about jobeasy": "JobEasy is a free portal for job searching and job posting.",
  "is jobeasy free": "Yes, JobEasy is completely free for job seekers and employers.",
  "features": "JobEasy offers simple job search, secure login, job posting, profiles, and support all in one place.",
  "privacy": "Your data is secure. For details, please check our Privacy Policy page.",
  "terms": "Rules and conditions are found on the Terms of Service page.",

  // Resume/Docs
  "resume upload": "You can upload your resume in your profile or while applying for jobs.",
  "document upload": "Attach required documents during your application process.",

  // Other
  "browser support": "JobEasy works best on Chrome, Firefox, and Edge browsers.",
  "mobile app": "Currently, JobEasy is a web-only portal. Mobile app is coming soon.",

  // Goodbye & Thanks
  "bye": "Thank you! Best of luck with your job search.",
  "thank you": "You're welcome! Feel free to ask if you have any more questions.",

  // Default fallback
  "default": "Sorry, I didn't understand your question. You can ask about job search, posting, account, or support.",
};



const PredefinedChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getAnswer = (question) => {
    const q = question.toLowerCase();
    for (const key in predefinedQA) {
      if (q.includes(key)) {
        return predefinedQA[key];
      }
    }
    return "Sorry, I didn't understand your question.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const answer = getAnswer(input);
    setMessages((prev) => [...prev, { sender: "bot", text: answer }]);

    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "#4E44CE",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "10px 22px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Ask Chat bot
        </button>
      )}
      {open && (
        <div
          style={{
            width: 320,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
            boxShadow: "0 4px 24px rgba(0,0,0,0.16)",
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: 10,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Ask Chat bot
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              maxHeight: 200,
              marginBottom: 10,
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "8px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: msg.sender === "user" ? "#ececff" : "#4E44CE",
                    color: msg.sender === "user" ? "#333" : "#fff",
                    borderRadius: 6,
                    padding: "6px 12px",
                    maxWidth: "80%",
                    fontSize: 14,
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 4,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
              placeholder="Type your question..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#4E44CE",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "8px 16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: 12,
              background: "#eee",
              color: "#333",
              border: "none",
              borderRadius: 4,
              padding: "6px 16px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PredefinedChatbot;