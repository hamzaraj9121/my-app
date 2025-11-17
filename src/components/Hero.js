"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "@/app/globals.css";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";



const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};



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
       
   
 
  

  
      <ParticlesBackground />
      <div style={{ zIndex: 1, textAlign: "center" }}>
    <motion.h4
  variants={textVariant}
  initial="hidden"
  animate="visible"
  custom={0.1}
  style={{
    marginTop: "80px",
    fontSize: "1.5rem",
    fontWeight: 500,
    color: "var(--secondary)",
    marginBottom: "0.5rem",
  }}
>
  Hello, I'm
</motion.h4>


    <motion.h1
  variants={textVariant}
  initial="hidden"
  animate="visible"
  custom={0.3}
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
  HAMZA
</motion.h1>

      
<motion.p
  variants={textVariant}
  initial="hidden"
  animate="visible"
  custom={0.5}
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
</motion.p>

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
          



      `}</style>
    

 <motion.p
  variants={textVariant}
  initial="hidden"
  animate="visible"
  custom={0.8}
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
</motion.p>
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

      <a href="/Hamzaresume.pdf" download className="fill-button">
    Resume
  </a>
         <a href="#projects" className="fill-button">
  Get In Touch
</a>

        </div>
        {/* Social Icons */}
     
      
    </section>
  );
}