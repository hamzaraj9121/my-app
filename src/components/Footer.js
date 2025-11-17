'use client';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
    background: "var(--experience-bg)",
        color: "var(--experience-text)",
        padding: "40px 20px", // Adjust padding
        textAlign: "center", // Center align all content
        position: "relative", // Position relative for absolute children
      }}
    >
      <div className="container">
        {/* Footer Heading */}
        <h1
          style={{
            fontSize: "1.8rem", // Adjusted size for the heading
            fontWeight: "700", // Bold font for emphasis
            fontFamily: "'Poppins', sans-serif", // Elegant font
            marginBottom: "15px", // Space below the heading
          }}
        >
          Contact Us
        </h1>

        {/* Footer Description */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            marginBottom: "20px", // Space below the description
            maxWidth: "600px", // Limit width for better readability
            margin: "0 auto", // Center the description
          }}
        >
          Feel free to reach out to us via call, email, or connect with us on LinkedIn and GitHub. We’d love to hear from you!
        </p>

        {/* Contact Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the icons
            gap: "20px", // Space between icons
            marginBottom: "20px", // Space below the icons
          }}
        >
          {/* Call Icon */}
          <a
            href="tel:+923270086607"
            style={{
              color: "#f0f0f0", // Default white color
              fontSize: "1.5rem", // Icon size
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00BFFF")}
            onMouseOut={(e) => (e.target.style.color = "#f0f0f0")}
          >
            <FaPhoneAlt />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:hamzashahbaz9121@gmail.com"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00BFFF")}
            onMouseOut={(e) => (e.target.style.color = "#f0f0f0")}
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/muhammad-hamza-792539365/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00BFFF")}
            onMouseOut={(e) => (e.target.style.color = "#f0f0f0")}
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/hamzaraj9121"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00BFFF")}
            onMouseOut={(e) => (e.target.style.color = "#f0f0f0")}
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright Section */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "#888", // Slightly lighter color for copyright text
          }}
        >
          Copyright ©2025 <a href="#" style={{ color: "#00BFFF", textDecoration: "none" }}>Hamza Rajpoot</a>
        </p>
      </div>
    </footer>
  );
}