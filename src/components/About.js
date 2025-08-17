'use client';
import { FaCode, FaBriefcase, FaHeart ,PiBowlSteamFill , FaReadme} from 'react-icons/fa';
import { TbBubbleTea } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import Link from 'next/link';
import ParticlesBackground from './ParticlesBackground'; // Adjust the import based on your file structure

export default function About() {
  return (
    <section className="py-5 about-section">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticlesBackground />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <h6 className="text-uppercase text-primary text-center">Get to Know Me</h6>
        <h2 className=" mb-5 text-center fs-1 fw-bolder">
          About <span className="text-info">Me</span>
        </h2>

        <div className="row g-4">
          {/* Left: My Mission */}
          <div className="col-lg-6">
            <div className="p-4 rounded-4  shadow-sm bg-dark text-light mb-4">
              <h4 className="fw-medium mb-3">My Mission</h4>
              <p>
                I believe technology should be a bridge that connects people and solves real-world problems.
                My passion lies in crafting digital experiences that are not just functional, but delightful
                and accessible to everyone.
              </p>
              <p className="mb-0 text-secondary">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source,
                or mentoring aspiring developers. I love the constant evolution of web technologies and
                the endless possibilities they bring to create meaningful digital experiences.
              </p>


              
            </div>
             <div className="p-4 rounded-4 shadow-sm bg-dark text-light">
              <h5 className="fw-medium mb-3 ">What I Love Building</h5>
              <div className="d-flex align-items-center p-3 bg-body-tertiary text-light rounded-4 shadow-sm mb-2">
                <FaHeart className="me-2 text-info" />
                <div>
                  <h6 className="mb-0">User Experience</h6>
                  <small className='text-body-secondary'>Crafting intuitive interfaces that users love</small>
                </div>
              </div>

              
              <div className="d-flex align-items-center p-3 bg-body-tertiary text-light rounded-4 shadow-sm mb-2">
                <TbBubbleTea   className="me-2  text-info" />
                <div>
                  <h6 className="mb-0">Problem Solving</h6>
                  <small className='text-body-secondary'> Turing Complex challenges into elegant solutions</small>
                </div>
             </div>
             
              <div className="d-flex align-items-center p-3 bg-body-tertiary text-light rounded-4 shadow-sm mb-2">
                <FaReadme className="me-2 text-info" />
                <div>
                  <h6 className="mb-0">Continuies Learning</h6>
                  <small className='text-body-secondary'>Always exploring new technologies and best practices</small>
                </div>
             </div>
              {/* Add more items here if needed */}
            </div>

             
            
      
     
           


           
           
          </div>

          {/* Right: My Developer Journey */}
          <div className="col-lg-6 timeline-wrapper">
            <h4 className="fw-medium mb-4">My Developer Journey</h4>

            {/* Timeline Item 1 */}
            <div className="d-flex align-items-start mb-4 ">
              <div className="timeline-icon bg-primary text-white rounded-circle me-3">
                <FaCode />
              </div>
              <div className="p-3 rounded-4 bg-dark text-light shadow-sm w-100">
                <h5 className="mb-1">Started My Coding Journey</h5>
                <span className="badge bg-secondary mb-2">2022</span>
                <p className="mb-0 text-secondary">
                  Began learning programming fundamentals and web development, laying the foundation for a career in tech.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="d-flex align-items-start">
              <div className="timeline-icon bg-success text-white rounded-circle me-3">
                <FaBriefcase />
              </div>
              <div className="p-3 rounded-4 bg-dark text-light shadow-sm w-100">
                <h5 className="mb-1">First Internship</h5>
                <span className="badge bg-secondary mb-2">2025</span>
                <p className="mb-0 text-secondary">
                  Completed my first internship as a web developer at{" "}
                  <Link href="#" className="text-info text-secondary">Gamicacloud</Link>,
                  contributing to real-world projects and gaining valuable professional experience.
                </p>
              </div>
            </div>

           {/* Timeline Item 3 */}
            <div className="d-flex align-items-start mt-4">
              <div className="timeline-icon bg-success text-white rounded-circle me-3">
                <FaGraduationCap />
              </div>
              <div className="p-3 rounded-4 bg-dark text-light shadow-sm w-100">
                <h5 className="mb-1">Information technology Degree</h5>
                <span className="badge bg-secondary mb-2">continue</span>
                <p className="mb-0 text-secondary">
                 Studied Information Technology (BS IT), focusing on software development, 
                 databases, and networking. While I did not complete the degree, the program gave me a
                  strong start in IT fundamentals and encouraged me to continue learning through
                   projects and self-study. I gained a solid foundation in programming,
                    databases, networking, and IT concepts.
                </p>
              </div>
            </div>


           <div className="d-flex align-items-start mt-4">
              <div className="timeline-icon bg-success text-white rounded-circle me-3">
                <FaBriefcase />
              </div>
              <div className="p-3 rounded-4 bg-dark text-light shadow-sm w-100">
                <h5 className="mb-1">Freelance & Open Source</h5>
                <span className="badge bg-secondary mb-2">Independent</span>
                <p className="mb-0 text-secondary">
                 
                  
                  Started working as a freelance developer and contributing to open source projects,
                  expanding my skills and collaborating with the global developer community.
                </p>
              </div>
            </div>


          </div>
        </div>

      
      </div>
    </section>
  );
}


