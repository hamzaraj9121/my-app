"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./skill.css";
import { FaCode, FaDatabase } from "react-icons/fa";
import { MdDisplaySettings, MdOutlineDeveloperMode } from "react-icons/md";

export default function SkillsEducation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimate(true);
  }, []);

  // Helper to get animated width
  const getBarClass = () => (animate ? "progress-bar animate-progress" : "progress-bar");

  // Framer Motion variants
  const headingVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div
      id="skill"
      className="skills-education"
      style={{
       background: "var(--background)",
    color: "var(--text-color)",
    padding: "40px 20px",
    textAlign: "center",
    position: "relative",
    transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
     <div className="container mt-5">
    <motion.h2
      className="skills-heading"
      variants={headingVariant}
      initial="hidden"
      animate="visible"
      style={{
        fontWeight: 700,
        fontSize: "2.5rem",
        letterSpacing: "2px",
        marginBottom: "2.5rem",
        color: "var(--text-color)",
        textShadow: "0 2px 16px rgba(226, 231, 238, 0.15)",
        transition: "color 0.4s, transform 0.4s",
      }}
      whileHover={{ color: "#007bff", scale: 1.07 }}
    >
          <a href="#Skill">Skills & Technologies</a>
        </motion.h2>
        <div className="row">
      {/* Example of card with theme toggle */}
      <div className="col-md-6 mb-4">
       <motion.div
  className="card p-3 rounded-3 shadow-sm"
  variants={cardVariant}
  initial="hidden"
  animate="visible"
  whileHover={{
    scale: 1.03,
    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
  }}
  style={{
    minHeight: "300px",
    backgroundColor: "var(--card-bg)",
    color: "var(--card-text)",
    transition: "background-color 0.4s ease, color 0.4s ease",
  }}
>

              <div className="d-flex align-items-center mb-3">
              <span className="me-2 text-primary" style={{ fontSize: '1.5rem' }}>

              <FaCode />
              </span>
              <span>
                <h4 className="mb-0">Frontend</h4>

              </span>
              </div>
              <p className="text-muted mb-4">Crafting beautiful, responsive user interfaces</p>
              <div className="mb-2">
                <span className="text-white">React</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "95%" : "0%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
              </div>

             <span className="text-white">Typescript</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "70%" : "0%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
              <div className="mb-2">
                <span className="text-white">Next.js</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "80%" : "0%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">Tailwind CSS</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "92%" : "0%" }}
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    92%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">Framer Motion</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "85%" : "0%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Backend Card */}
          <div className="col-md-6 mb-4">
            <motion.div
              className="card p-3 text-white rounded-3"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(100,255,218,0.12)" }}
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <span className="me-2 text-primary" style={{ fontSize: '1.5rem' }}>
                  <MdOutlineDeveloperMode />
                  </span>
               <span>

                <h4 className="mb-0">Backend</h4>
               </span>

              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">Node.js</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "90%" : "0%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">Express.js</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary animate-progress"
                    role="progressbar"
                    style={{ width: animate ? "85%" : "0%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">GraphQL</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger animate-progress"
                    role="progressbar"
                    style={{ width: animate ? "75%" : "0%" }}
                    aria-valuenow="75"
                                                       aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">REST API</span>
                <div className="progress">
                  <div        
                    className="progress-bar bg-warning animate-progress"
                    role="progressbar"
                    style={{ width: animate ? "88%" : "0%" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    88%
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card p-3 text-white rounded-3"
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
              <span className="me-2 text-primary" style={{ fontSize: '1.5rem' }}>
                <MdDisplaySettings />
              </span>
                <h4 className="mb-0">DevOps</h4>
              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">SLack</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "90%":"0%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">Git & GitHub</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">Trello</span>
                <div className="progress">
                  <div
                    className={getBarClass()}
                    role="progressbar"
                    style={{ width: animate ? "85%" : "0%", backgroundColor: "#a73f1fff" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card p-3 text-white rounded-3"
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
               <span className="me-2 text-primary" style={{ fontSize: '1.5rem' }}>
                <FaDatabase />

               </span>
                <h4 className="mb-0">DataBase</h4>
              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">MongoDB</span>
                <div className="progress">
                  <div
                    className={getBarClass() + " bg-success"}
                    role="progressbar"
                    style={{ width: animate ? "90%" : "0%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
                <div className="mb-2">
                <span className="text-white">Oracle</span>
                <div className="progress">
                  <div
                    className={getBarClass() + " bg-secondary"}
                    role="progressbar"
                    style={{ width: animate ? "85%" : "0%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">MYSQl</span>
                <div className="progress">
                  <div
                    className={getBarClass() + " bg-secondary"}
                    role="progressbar"
                    style={{ width: animate ? "85%" : "0%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">GraphQL</span>
                <div className="progress">
                  <div
                    className={getBarClass() + " bg-danger"}
                    role="progressbar"
                    style={{ width: animate ? "75%" : "0%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animation CSS */}
      <style jsx>{`
        .animate-progress {
          transition: width 4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}