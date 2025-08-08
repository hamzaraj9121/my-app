import {
  FaNodeJs,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaPaintBrush,
  FaMapMarkerAlt,
  FaClock,
  FaFileAlt,
  FaFacebook,
  FaUsers, // Import Team Leadership Icon
} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";

import ParticlesBackground from "../components/ParticlesBackground";

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Lead",
      company: "Gamicacloud Development Club",
      type: "Full-time",
      duration: "Aug 2024 - Present · 9 mos",
      location: "Full Time, Faisalabad, Punjab, Pakistan",
      logo: "/image.png", // Replace with the actual logo path
      skills: [
        { name: "Next.js", icon: <FaReact /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Socket.io", icon: <BsChatDots />},
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Bootstrap 5.3", icon: <FaBootstrap /> },
      ],
    },
    // {
    //   title: "Graphic Designer",
    //   company: "The Arqam Schools Gojra Campus",
    //   type: "Part-time",
    //   duration: "Sep 2024 - Present · 8 mos",
    //   location: "Remote, Gojra, Punjab, Pakistan",
    //   logo: "/arqam.png", // Replace with the actual logo path
    //   skills: [
    //     { name: "Graphic Design", icon: <FaPaintBrush /> },
    //     { name: "Flyer Design", icon: <FaFileAlt /> },
    //     { name: "Social Media", icon: <FaFacebook /> },
    //   ],
    // },
  ];

  return (
    <>
      
      <div style={{ position: "relative", zIndex: 1,  }}>
        <section id="experience" className="py-5"><ParticlesBackground />
          <div className="container">
            <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600", color: "#fff" }}>
              Experience
            </h2>
            <div className="row">
              {experiences.map((exp, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body" style={{ backgroundColor: "#2a2828" }}>
                      {/* Company Logo and Name */}
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                            borderRadius: "50%", // Circular logo
                            border: "2px solid #ddd", // Border for better visibility
                            marginRight: "15px", // Space between logo and name
                          }}
                        />
                        <p
                          className="mb-0 text-white"
                          style={{
                            fontSize: "1.5rem", // Larger font size for prominence
                            fontWeight: "600", // Bold font
                            textTransform: "uppercase", // Uppercase for company name
                            letterSpacing: "1px", // Spacing between letters
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      {/* Title */}
                      <h4
                        className="card-title text-primary text-center"
                        style={{
                          fontSize: "1.3rem", // Larger font size for prominence
                          fontWeight: "600", // Bold font
                          marginBottom: "15px", // Space below the title
                        }}
                      >
                        {exp.title}
                      </h4>
                      {/* Company Type */}
                      <h6 className="card-subtitle mb-2 text-muted text-center">{exp.type}</h6>
                      {/* Duration and Location */}
                      <div className="d-flex align-items-center mb-2">
                        <FaClock className="me-2 text-primary" />
                        <p className="mb-0 text-white">
                          <strong>Duration:</strong> {exp.duration}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 text-primary" />
                        <p className="mb-0 text-white">
                          <strong>Location:</strong> {exp.location}
                        </p>
                      </div>
                      {/* Skills */}
                      <div className="mt-3">
                        <strong className="text-white">Skills:</strong>
                        <ul className="list-inline mt-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <li
                              key={skillIndex}
                              className="list-inline-item bg-light text-dark px-3 py-2 m-1 rounded d-flex align-items-center"
                            >
                              {skill.icon && <span className="me-2">{skill.icon}</span>}
                              {skill.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}