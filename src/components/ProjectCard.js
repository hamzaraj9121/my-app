export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="col-md-4 mb-4 position-relative">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="card h-100 shadow-sm border-0">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body text-white" style={{ backgroundColor: "#2a2828" }}>
            <h5
              className="card-title"
              style={{
                fontWeight: "600",
                position: "relative",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text position-relative"
              style={{
                fontSize: "1rem",
                position: "relative",
                color: "#dac5c5", // Softer white for contrast
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
