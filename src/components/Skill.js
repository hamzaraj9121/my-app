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
      background: "var(--experience-bg)",
    color: "var(--experience-text)",
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
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
       transition={{ duration: 0.8, ease: "easeOut" }} 

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
  <span className="skill-label text-muted">React</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#f10000ff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "95%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

                  
                
             
          <div className="mb-2">
            <span className="skill-label">Typescript</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      initial={{ width: 0 }}
      style={{ backgroundColor: "#00ff66ff" }}
      whileInView={{ width: "90%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="90"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

          <div className="mb-2">
            <span className="skill-label">Next.Js</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#1e00ffff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="80"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>




            <div className="mb-2">
              <span className="skill-label">Tailwind.css</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#00fffbff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "95%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>




            <div className="mb-2">
              <span className="skill-label">React</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      style={{ backgroundColor: "#ff00c8ff" }}
      role="progressbar"
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="80"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
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
            <span className="skill-label">Node.js</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#00fbffff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="80"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      80%
    </motion.div>
  </div>
</div>

            <div className="mb-2">
              <span className="skill-label">Express.js</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#2b08f7ff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "75%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

            <div className="mb-2">
              <span className="skill-label">GraphQL</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      initial={{ width: 0 }}
      whileInView={{ width: "70%" }}
      style={{ backgroundColor: "#fd0303ff" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="70"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>



          <div className="mb-2">
            <span className="skill-label">Rest API</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#b7f50aff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
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
              <span className="skill-label">Slack</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}

    style={{ backgroundColor: "#0089f9ff" }}
      role="progressbar"
      initial={{ width: 0 }}
      whileInView={{ width: "95%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

          <div className="mb-2">
            <span className="skill-label">Git & Github</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#26f806ff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "90%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="90"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

            <div className="mb-2">
              <span className="skill-label">Trello</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#8800ffff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "95%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="95"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
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
              <span className="skill-label">MongoDB</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      initial={{ width: 0 }}
      style={{ backgroundColor: "#eaff00ff" }}
      whileInView={{ width: "75%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

              <div className="mb-2">
                <span className="skill-label">Oracle</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      role="progressbar"
      style={{ backgroundColor: "#ff0000ff" }}
      initial={{ width: 0 }}
      whileInView={{ width: "95%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="70"
      aria-valuemin="0"
      aria-valuemax="70"
    >
      95%
    </motion.div>
  </div>
</div>

            <div className="mb-2">
              <span className="skill-label">MySQL</span>
  <div className="progress">
    <motion.div
      className={getBarClass()}
      style={{ backgroundColor: "#1100ffff" }}
      role="progressbar"
      initial={{ width: 0 }}
      whileInView={{ width: "85%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="85"
      aria-valuemin="0"

      aria-valuemax="100"
    >
      95%
    </motion.div>
  </div>
</div>

            <div className="mb-2">
              <span className="skill-label" >GraphQl</span>
  <div className="progress">
    <motion.div
      className={getBarClass() + "bg-danger"}
      role="progressbar"
      initial={{ width: 0 }}
      style={{ backgroundColor: "#ffd000ff" }}
      whileInView={{ width: "85%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      aria-valuenow="85"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      95%
    </motion.div>
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