"use client";
import ParticlesBackground from "./ParticlesBackground";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "@/app/globals.css";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <ParticlesBackground />
      <div style={{ zIndex: 1 }}>
        <h1
          className="display-4"
          style={{
            fontWeight: 700,
            fontSize: "3rem",
            letterSpacing: "2px",
            color: "#fff",
            marginBottom: "1rem",
            textShadow: "0 2px 16px rgba(0,0,0,0.3)",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p
          className="lead"
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#f8f9faff",
            marginBottom: "0.5rem",
          }}
        >
        Muhammad Hamza
        </p>
        <p
          className="lead"
          style={{
            fontSize: "1.1rem",
            color: "#e0e0e0",
            marginBottom: "2.5rem",
          }}
        >
          Web Developer &nbsp;|&nbsp; Flyer Designer &nbsp;|&nbsp; UI/UX Designer
        </p>
        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <a
            href="#Project"
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: "50px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              letterSpacing: "1px",
              boxShadow: "0 2px 16px rgba(66,133,244,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(251, 252, 253, 0.35)";
              e.currentTarget.style.background = "#060606ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(242, 245, 249, 0.15)";
              e.currentTarget.style.background = "#060606ff";
            }}
          >
            VIEW WORK
          </a>
          <a
            href="#Contact"
              
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: "50px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              letterSpacing: "1px",
              boxShadow: "0 2px 16px rgba(66,133,244,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(251, 252, 253, 0.35)";
              e.currentTarget.style.background = "#060606ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(242, 245, 249, 0.15)";
              e.currentTarget.style.background = "#060606ff";
            }}
          >
            GET IN TOUCH
          </a>
        </div>
        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid #fff",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid #fff",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
            }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:your@email.com"
            style={{
              border: "2px solid #fff",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
            }}
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
}