export default function SkillsEducation() {
  const education = [
    {
      institution: "Governmment Science College Faisalabad",
      degree: "Fsc Pre-Medical",
      
    },
    {
      institution: "Ripha International University ",
      degree: " Information Technology",
      grade: "3 CGPA",
    }
   
  ];

  const skills = [
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
    "Bootstrap 5.3",
  "Graph QL",

    "Graphic Design",
     "Socket.io",
     "Team Management",
     "Team Leadership",
     "Problem Solving",
    "Communication",
    "Time Management",
     
  ];

  return (
    <section id="skills-education" className="py-5 position-relative">
      <div className="container">
        {/* Education Section */}
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Education
        </h2>
        <div className="row">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-primary">
               <h4> <strong>institute:</strong>
                </h4>   <h5 className="card-title text-primary">{edu.institution}</h5>
                  <p className="card-text text-primary">
                    <strong>Degree:</strong> {edu.degree}
                    <br />
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Skills
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <ul className="list-inline">
                  {skills.map((skill, index) => (
                    <li key={index} className="list-inline-item bg-light text-dark px-3 py-2 m-1 rounded">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}