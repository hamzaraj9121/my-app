"use client";
import React, { useEffect, useState } from "react";
import "./skill.css";

export default function SkillsEducation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimate(true);
  }, []);

  // Helper to get animated width
  const getBarClass = () => (animate ? "progress-bar animate-progress" : "progress-bar");

  return (
    <div
      id="skill"
      className="skills-education"
      style={{
        background: "#020b16", // Dark blue background to match the theme
        color: "#f0f0f0", // Soft white text for readability
        padding: "40px 20px", // Adjust padding
        textAlign: "center", // Center align all content
        position: "relative", // Position relative for absolute children
      }}
    >
      <div className="container mt-5">
        {/* Animated Heading */}
        <h2
          className="skills-heading"
          style={{
            fontWeight: 700,
            fontSize: "2.5rem",
            letterSpacing: "2px",
            textAlign: "center",
            marginBottom: "2.5rem",
            color: "#f1f3f6ff",
            textShadow: "0 2px 16px rgba(226, 231, 238, 0.15)",
            transition: "color 0.4s, transform 0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#010101ff";
            e.currentTarget.style.transform = "scale(1.07)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#f4f6f8ff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <a href="#Skill">Skills & Technologies</a>
        </h2>
        <div className="row">
          {/* Frontend Card */}
          <div className="col-md-6 mb-4">
            <div
              className="card p-3 text-white rounded-3"
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-code-slash text-primary me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                <h4 className="mb-0">Frontend</h4>
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
                    aria-valuenow="95"
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
                    className="progress-bar bg-primary animate-progress"
                    role="progressbar"
                    style={{ width: "80%" }}
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
                    className="progress-bar bg-primary animate-progress"
                    role="progressbar"
                    style={{ width: "92%" }}
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
                    className="progress-bar bg-primary animate-progress"
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
            </div>
          </div>

          {/* Backend Card */}
          <div className="col-md-6 mb-4">
            <div
              className="card p-3 text-white rounded-3"
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-server text-primary me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.333 2.667C1.333 1.194 2.527 0 3.999 0h8.667c1.473 0 2.666 1.194 2.666 2.667v10.666c0 1.473-1.194 2.667-2.666 2.667H3.999c-1.472 0-2.666-1.194-2.666-2.667V2.667zM3.999 1.333c-.46 0-.666.805-.666 1.334h10.666c0-.529-.805-1.334-.666-1.334H3.999zm0 12h8.667c.46 0 .666-.805.666-1.334V8.666c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334zm0-8h8.667c.46 0 .666-.805.666-1.334V2.667c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334z" />
                </svg>
                <h4 className="mb-0">Backend</h4>
              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">Node.js</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "90%" }}
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
                <span className="text-white">GraphQL</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger animate-progress"
                    role="progressbar"
                    style={{ width: "75%" }}
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
                    style={{ width: "88%" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    88%
                  </div>
                </div>
                <div className="mb-2"></div>
                <span className="text-white">REST API</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning animate-progress"
                    role="progressbar"
                    style={{ width: "88%" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    88%
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-server text-primary me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.333 2.667C1.333 1.194 2.527 0 3.999 0h8.667c1.473 0 2.666 1.194 2.666 2.667v10.666c0 1.473-1.194 2.667-2.666 2.667H3.999c-1.472 0-2.666-1.194-2.666-2.667V2.667zM3.999 1.333c-.46 0-.666.805-.666 1.334h10.666c0-.529-.805-1.334-.666-1.334H3.999zm0 12h8.667c.46 0 .666-.805.666-1.334V8.666c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334zm0-8h8.667c.46 0 .666-.805.666-1.334V2.667c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334z" />
                </svg>
                <h4 className="mb-0">DevOps</h4>
              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">Git</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">GitHub</span>
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
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
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
          <div className="col-md-6 mb-4">
            <div
              className="card p-3 text-white rounded-3"
              style={{
                minHeight: "300px",
                backgroundColor: "#051326", // Darker navy blue for cards
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-server text-primary me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.333 2.667C1.333 1.194 2.527 0 3.999 0h8.667c1.473 0 2.666 1.194 2.666 2.667v10.666c0 1.473-1.194 2.667-2.666 2.667H3.999c-1.472 0-2.666-1.194-2.666-2.667V2.667zM3.999 1.333c-.46 0-.666.805-.666 1.334h10.666c0-.529-.805-1.334-.666-1.334H3.999zm0 12h8.667c.46 0 .666-.805.666-1.334V8.666c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334zm0-8h8.667c.46 0 .666-.805.666-1.334V2.667c0-.529-.805-1.334-.666-1.334H3.999c-.46 0-.666.805-.666 1.334v3.333c0 .529.805 1.334.666 1.334z" />
                </svg>
                <h4 className="mb-0">DataBase</h4>
              </div>
              <p className="text-muted mb-4">Building robust, scalable server-side applications</p>
              <div className="mb-2">
                <span className="text-white">MongoDB</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-white">GraphQl</span>
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
                <span className="text-white">GraphQL</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
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
          transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}