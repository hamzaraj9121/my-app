"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "@/app/globals.css";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState } from "react";


export default function Hero() {
 const roles = ["Web Developer", "UI/UX Designer" , "Tech Enthusiast", "Ai Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
    const current = roles[roleIndex];
    let typingSpeed = isDeleting ? 70 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);


      return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ zIndex: 10, position: "relative" }}
    >
       <div className="color-fade fade-1"
    style={{
      position: "absolute",
     
      left: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(59,130,246,0.4)", // Tailwind blue-500
      filter: "blur(100px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>
   <div className="color-fade fade-2"
    style={{
      position: "absolute",
      bottom: "-100px",
      left: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(234, 20, 206, 0.4)", // Tailwind blue-500
      filter: "blur(100px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>
  <div className="color-fade fade-3"
    style={{
      position: "absolute",
      
      right: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(216, 234, 20, 0.4)", // Tailwind blue-500
      filter: "blur(100px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>
   <div className="color-fade fade-4"
    style={{
      position: "absolute",
     
      right: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(28, 28, 236, 0.4)", // Tailwind blue-500
      filter: "blur(100px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>

  
      <ParticlesBackground />
      <div style={{ zIndex: 1, textAlign: "center" }}>
      <h4
        style={{
          marginTop: "80px",
          fontSize: "1.5rem",
          fontWeight: 500,
          color: "var(--secondary)",
          marginBottom: "0.5rem",
        }}
      >
        Hello, I'm
      </h4>

      <h1
        style={{
          fontWeight: 700,
          fontSize: "3.8rem",
          letterSpacing: "2px",
          color: "var(--hero-text)",
          marginBottom: "1.5rem",
          textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          textTransform: "uppercase",
        }}
      >
       Muhammad HAMZA
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "var(--accent)",
          marginBottom: "2rem",
          letterSpacing: "1px",
          display: "inline-block",
        }}
      >
        {text}
        <span className="cursor"></span>
      </p>

      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 4px;
          width: 2px;
          background-color: var(--accent);
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
            /* 🌈 Fade blobs shared styles */
  .color-fade {
    position: absolute;
    width: 400px;
    height: 400px;
    filter: blur(100px);
    border-radius: 50%;
    z-index: 0;
    transition: opacity 0.5s ease;
  }

  .fade-1 {
    top: -100px;
    left: -100px;
    background: rgba(59, 130, 246, 0.4); /* blue */
  }
  .fade-2 {
    bottom: -100px;
    left: -100px;
    background: rgba(234, 20, 206, 0.4); /* pink */
  }
  .fade-3 {
    bottom: -100px;
    right: -100px;
    background: rgba(216, 234, 20, 0.4); /* yellow */
  }
  .fade-4 {
    top: -100px;
    right: -100px;
    background: rgba(28, 28, 236, 0.4); /* deep blue */
  }

  /* 🌞 Show fade only in LIGHT mode */
  @media (prefers-color-scheme: light) {
    .color-fade {
      opacity: 1;
    }
  }

  /* 🌙 Hide fade in DARK mode */
  @media (prefers-color-scheme: dark) {
    .color-fade {
      opacity: 0;
    }
  }

      `}</style>
    

  <p
    style={{
      fontSize: "1.1rem",
      fontWeight: 500,
      color: "var(--foreground)",
      marginBottom: "2rem",
      maxWidth: "600px",
      marginInline: "auto",
    }}
  >
    A passionate developer turning ideas into modern, interactive, and visually
    stunning web experiences.
  </p>
</div>


<div>
   



   <div
          style={{
            marginBottom: "2rem",
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
   
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2515d9ff;
    font-size: 2rem;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .pulse-hover-btn:hover {
    transform: scale(1.1);
    border-color: #de2280ff;
    color: #4919f4ff;
    
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
   
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #30e8dcff;
    font-size: 2rem;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .pulse-hover-btn:hover {
    transform: scale(1.1);
    border-color: #97c61fff;
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
  
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #242aedff;
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
        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >

        <a href="#projects" className="fill-button">
  VIEW WORK
</a>

         <a href="#projects" className="fill-button">
  Get In Touch
</a>

        </div>
        {/* Social Icons */}
     
      
    </section>
  );
}