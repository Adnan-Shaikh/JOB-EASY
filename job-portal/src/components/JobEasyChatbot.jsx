import React, { useState } from "react";

const JobEasyChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Chat API call (backend se)
  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      // agar backend sahi reply bhej raha hai
      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "No response from AI model." },
        ]);
      }

      setInput("");
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠ Error: Could not connect to the server." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      {/* Button icon ki jagah text */}
      {!open && (
        <button
          style={{
            background: "#4E44CE",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 22px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          Ask Chat bot
        </button>
      )}

      {/* Chat Pop-up */}
      {open && (
        <div
          style={{
            width: "320px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.16)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Ask Chat bot
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              maxHeight: "200px",
              marginBottom: "10px",
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
                    background:
                      msg.sender === "user" ? "#ececff" : "#4E44CE",
                    color: msg.sender === "user" ? "#333" : "#fff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    maxWidth: "80%",
                    fontSize: "14px",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    background: "#4E44CE",
                    color: "#fff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "14px",
                  }}
                >
                  Bot is typing...
                </span>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
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
                borderRadius: "4px",
                padding: "8px 16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              Send
            </button>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "12px",
              background: "#eee",
              color: "#333",
              border: "none",
              borderRadius: "4px",
              padding: "6px 16px",
              fontWeight: "500",
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

export default JobEasyChatbot;