"use client";
import {
  FaCode,
  FaBriefcase,
  FaHeart,
  PiBowlSteamFill,
  FaReadme,
} from "react-icons/fa";
import { TbBubbleTea } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground"; // Adjust the import based on your file structure

export default function About() {
  return (
    <section
      className="py-5 about-section"
      style={{
        
        background: "var(--background)", // Using our new background variable
        color: "var(--foreground)", // Using our new foreground variable
        padding: "60px 20px", // Increased padding for better spacing
        textAlign: "center", // Center align all content
        position: "relative", // Position relative for absolute children
         transition: "background-color 0.4s ease, color 0.4s ease",

      }}
    >
       <div
    style={{
      position: "absolute",
      top: "-100px",
      left: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(59,130,246,0.4)", // Tailwind blue-500
      filter: "blur(200px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>
   <div
    style={{
      position: "absolute",
      bottom: "-100px",
      right: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(147,51,234,0.4)", // Tailwind purple-600
      filter: "blur(200px)",
      borderRadius: "50%",
      zIndex: 0,
    }}
  ></div>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* <ParticlesBackground /> */}
      </div>
      <div className="container">
        {/* Section Title */}
        <h6
          className="text-uppercase text-center"
          style={{
            color: "var(--accent)",
            letterSpacing: "2px",
            fontWeight: "600",
          }}
        >
          Get to Know Me
        </h6>
        <h2 className="mb-5 text-center fs-1 fw-bolder">
          About <span style={{ color: "var(--accent)" }}>Me</span>
        </h2>

        <div className="row g-4">
          {/* Left: My Mission */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 shadow-sm mb-4"
              style={{
                backgroundColor: "var(--navy-light)",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <h4
                className="fw-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                My Mission
              </h4>
              <p style={{ color: "var(--secondary)", lineHeight: "1.8" }}>
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion lies in crafting digital
                experiences that are not just functional, but delightful and
                accessible to everyone.
              </p>
              <p
                className="mb-0"
                style={{ color: "var(--secondary)", lineHeight: "1.8" }}
              >
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and the endless
                possibilities they bring to create meaningful digital
                experiences.
              </p>
            </div>

            <div
              className="p-4 rounded-4 shadow-sm"
              style={{
                backgroundColor: "var(--navy-light)",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <h5
                className="fw-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                What I Love Building
              </h5>

              <div
                className="d-flex align-items-center p-3 rounded-4 shadow-sm mb-3"
                style={{
                  backgroundColor: "rgba(246, 247, 249, 0.7)",
                  borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
                }}
              >
                <FaHeart
                  className="me-3"
                  style={{ color: "var(--accent)", fontSize: "1.2rem" }}
                />
                <div>
                  <h6 className="mb-0" style={{ color: "var(--foreground)" }}>
                    User Experience
                  </h6>
                  <small style={{ color: "var(--secondary)" }}>
                    Crafting intuitive interfaces that users love
                  </small>
                </div>
              </div>

              <div
                className="d-flex align-items-center p-3 rounded-4 shadow-sm mb-3"
                style={{
                  backgroundColor: "rgba(244, 244, 244, 0.7))",
                  borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
                }}
              >
                <TbBubbleTea
                  className="me-3"
                  style={{ color: "var(--accent)", fontSize: "1.2rem" }}
                />
                <div>
                  <h6 className="mb-0" style={{ color: "var(--foreground)" }}>
                    Problem Solving
                  </h6>
                  <small style={{ color: "var(--secondary)" }}>
                    Turning complex challenges into elegant solutions
                  </small>
                </div>
              </div>

              <div
                className="d-flex align-items-center p-3 rounded-4 shadow-sm mb-2"
                style={{
                  backgroundColor: "rgba(246, 247, 249, 0.7)",
                  borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
                }}
              >
                <FaReadme
                  className="me-3"
                  style={{ color: "var(--accent)", fontSize: "1.2rem" }}
                />
                <div>
                  <h6 className="mb-0" style={{ color: "var(--foreground)" }}>
                    Continuous Learning
                  </h6>
                  <small style={{ color: "var(--secondary)" }}>
                    Always exploring new technologies and best practices
                  </small>
                </div>
              </div>
              {/* Add more items here if needed */}
            </div>
          </div>

          {/* Right: My Developer Journey */}
          <div className="col-lg-6 timeline-wrapper">
            <h4
              className="fw-medium mb-4"
              style={{ color: "var(--foreground)" }}
            >
              My Developer Journey
            </h4>

            {/* Timeline Item 1 */}
            <div className="d-flex align-items-start mb-4">
              <div
                className="timeline-icon rounded-circle me-3"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
                }}
              >
                <FaCode />
              </div>
              <div
                className="p-3 rounded-4 shadow-sm w-100"
                style={{
                  backgroundColor: "var(--navy-light)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <h5 className="mb-1" style={{ color: "var(--foreground)" }}>
                  Started My Coding Journey
                </h5>
                <span
                  className="badge mb-2"
                   style={{
    background: "linear-gradient(135deg, rgba(245, 246, 247, 0.9), rgba(142, 174, 238, 0.7))",
    borderLeft: "2px solid var(--accent)",
    boxShadow: "0 10px 25px rgba(151, 113, 231, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
                >
                  2022
                </span>
                <p className="mb-0" style={{ color: "var(--secondary)" }}>
                  Began learning programming fundamentals and web development,
                  laying the foundation for a career in tech.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}

            <div className="d-flex align-items-start">
              <div
                className="timeline-icon rounded-circle me-3"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
                }}
              >
                <FaCode />
              </div>
              <div
                className="p-3 rounded-4 shadow-sm mb-4"
                style={{
                  backgroundColor: "var(--navy-light)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <h5 className="mb-1" style={{ color: "var(--foreground)" }}>
                  Exploring New Technologies
                </h5>
                <span
                  className="badge mb-2"
                  style={{
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    color: "var(--accent)",
                    fontWeight: "500",
                  }}
                >
                  2023
                </span>
                <p className="mb-0" style={{ color: "var(--secondary)" }}>
                  Delved into modern frameworks and libraries, enhancing my
                  skills in building dynamic and responsive web applications.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}

            <div className="d-flex align-items-start">
              <div
                className="timeline-icon rounded-circle me-3"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
                }}
              >
                <FaCode />
              </div>
              <div
                className="p-3 rounded-4 shadow-sm mb-4"
                style={{
                  backgroundColor: "var(--navy-light)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <h5 className="mb-1" style={{ color: "var(--foreground)" }}>
                  Information Technology Education
                </h5>
                <span
                  className="badge mb-2"
                  style={{
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    color: "var(--accent)",
                    fontWeight: "500",
                  }}
                >
                  2023 - Present
                </span>
                <p className="mb-0" style={{ color: "var(--secondary)" }}>
                  Pursuing a Bachelor's degree in Information Technology at the
                  University of Riphah International Pakistan, to deepen my
                  understanding of technology and its applications.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}

            <div className="d-flex align-items-start">
              <div
                className="timeline-icon rounded-circle me-3"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
                }}
              >
                <FaBriefcase />
              </div>
              <div
                className="p-3 rounded-4 shadow-sm mb-4"
                style={{
                  backgroundColor: "var(--navy-light)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <h5 className="mb-1" style={{ color: "var(--foreground)" }}>
                  Freelance and Open source
                </h5>
                <span
                  className="badge mb-2"
                  style={{
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                    color: "var(--accent)",
                    fontWeight: "500",
                  }}
                >
                  Continue
                </span>
                <p className="mb-0" style={{ color: "var(--secondary)" }}>
                  Pursuing a Bachelor's degree in Information Technology at the
                  University of Riphah International,  Pakistan, to deepen my
                  understanding of technology and its applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
