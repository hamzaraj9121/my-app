"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "@/app/globals.css";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        zIndex: 0,
        background:"transparent",
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
            fontSize: "3.5rem",
            letterSpacing: "2px",
            color: "var(--foreground)",
            marginBottom: "1rem",
            textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p
          className="lead"
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "var(--accent)",
            marginBottom: "0.8rem",
          }}
        >
        Muhammad Hamza
        </p>
        <p
          className="lead"
          style={{
            fontSize: "1.2rem",
            color: "var(--secondary)",
            marginBottom: "2.5rem",
            letterSpacing: "1px",
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
              color: "var(--accent)",
              fontWeight: 600,
              border: "1px solid var(--accent)",
              borderRadius: "4px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              letterSpacing: "1px",
              boxShadow: "0 4px 20px rgba(100, 255, 218, 0.1)",
              transition: "all 0.3s ease",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(150, 300, 270, 0.8)";
              e.currentTarget.style.background = "rgba(4, 248, 191, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(100, 255, 218, 0.1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            VIEW WORK
          </a>
         <a
            href="#Project"
            style={{
              background: "transparent",
              color: "var(--accent)",
              fontWeight: 600,
              border: "1px solid var(--accent)",
              borderRadius: "4px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              letterSpacing: "1px",
              boxShadow: "0 4px 20px rgba(100, 255, 218, 0.1)",
              transition: "all 0.3s ease",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(100, 255, 218, 0.2)";
              e.currentTarget.style.background = "rgba(100, 255, 218, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(100, 255, 218, 0.1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Get In Touch
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
  className="pulse-hover-btn"
>
  <FaGithub />
</a>

<style jsx>{`
  .pulse-hover-btn {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .pulse-hover-btn:hover {
    transform: scale(1.1);
    border-color: #eae6e8ff;
    color: #eae6e8ff;
    
  }
`}</style>

     <a
  href="https://www.linkedin.com/in/muhammad-hamza-792539365/"
  target="_blank"
  rel="noopener noreferrer"
  className="pulse-hover-btn"
>
  <FaLinkedinIn />
</a>

<style jsx>{`
  .pulse-hover-btn {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .pulse-hover-btn:hover {
    transform: scale(1.1);
    border-color: #eae6e8ff;
    color: #eae6e8ff;
    
  }
`}</style>
         <a
  href="mailto:hamzashahbaz9121@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="pulse-hover-btn"
>
  <MdEmail />
</a>

<style jsx>{`
  .pulse-hover-btn {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .pulse-hover-btn:hover {
    transform: scale(1.1);
    border-color: #eae6e8ff;
    color: #eae6e8ff;
    
  }
`}</style>
        </div>
      </div>
    </section>
  );
}