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

import ParticlesBackground from "@/components/ParticlesBackground";

export default function Experience() {
  const experiences = [
  
    {
      title: "Internship Letter",
      company: "GAMICA Initiative for Artificial Intelligence & Computing (GIAIC)",
      type: "Internship Full-Time",
      duration: "Feb - July 2025 ",
      location: "Full Time, Faisalabad, Punjab, Pakistan",
      logo: "/image.png", // Add your internship logo here
      skills: [
        { name: "Next.js", icon: <FaReact /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Express.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Socket.io", icon: <BsChatDots />},
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Bootstrap 5.3", icon: <FaBootstrap /> },
        { name: "Team Leadership", icon: <FaUsers /> },
        { name: "Communication", icon: <FaFacebook /> },  
      ],
      
      pdf: "/cert-201[1].pdf", // Path to your PDF file
    },
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
                <div key={index} className="col-md-6 mx-auto mb-4">
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

                       {/* PDF Button for Internship */}
                      {exp.pdf && (
                        <div className="mt-3 text-center">
                          <a
                            href={exp.pdf}
                            target="_blank"
                            download="cert-201[1].pdf"
                            className="btn btn-primary"
                          >
                            View Internship Letter (PDF)
                          </a>
                        </div>
                      )}
                      {/* Company Type */}
                      <h6 className="card-subtitle mb-2 text-muted text-center mt-3">{exp.type}</h6>
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