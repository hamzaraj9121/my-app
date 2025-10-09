export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="col-md-4 mb-4 position-relative">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className="project-link"
      >
        <div className="card h-100 shadow-sm border-0" style={{ 
          // backgroundColor: "var(--navy-light)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(100, 255, 218, 0.1)",
          transition: "all 0.3s ease"
        }}>
          <div style={{ overflow: "hidden" }}>
            <img 
              src={image} 
              className="card-img-top hover-zoom" 
              alt={title} 
              style={{ 
                height: "200px",
                objectFit: "cover"
              }}
            />
          </div>
          <div className="card-body" style={{ backgroundColor: "var(--navy-light)" }}>
            <h5
              className="card-title"
              style={{
                fontWeight: "600",
                position: "relative",
                color: "var(--foreground)",
                marginBottom: "12px"
              }}
            >
              {title}
            </h5>
            <p
              className="card-text position-relative"
              style={{
                fontSize: "0.95rem",
                position: "relative",
                color: "var(--secondary)",
                lineHeight: "1.6"
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
