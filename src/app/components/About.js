'use client';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "", // Dark background for contrast
        color: "#f0f0f0", // Soft white text for readability
        width: "100%", // Full width to match the navbar
        height: "70vh", // Full viewport height
        display: "flex",
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        textAlign: "center", // Center-align text
        padding: "0 20px", // Add padding for responsiveness
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2
          style={{
            fontSize: "3rem", // Match the Hero section heading size
            fontWeight: "600", // Match the boldness of the Hero section heading
            
            letterSpacing: "1.5px", // Subtle letter spacing for consistency
            marginBottom: "20px", // Space below heading
            position: "relative",
          }} className="display-4"
        >
          About Me
          <span
            style={{
              display: "block",
              width: "60px",
              height: "3px",
              background: "#00BFFF", // Accent color for separator
              margin: "10px auto 0",
            }}
          ></span>
        </h2>
        <p
          style={{
            fontSize: "1.2rem", // Readable paragraph size
            lineHeight: "1.8", // Breathing space between lines
            fontFamily: "'Roboto', sans-serif", // Clean font for body text
            color: "#e0e0e0", // Softer white for contrast
            marginBottom: "20px",
          }}
        >
          I am a highly motivated and creative individual with a deep passion for crafting meaningful digital experiences. My approach is driven by <span style={{ color: "#00BFFF", fontWeight: "bold" }}>curiosity</span>, <span style={{ color: "#00BFFF", fontWeight: "bold" }}>attention to detail</span>, and a commitment to continuous learning.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            fontFamily: "'Roboto', sans-serif",
            color: "#e0e0e0",
          }}
        >
          I thrive in environments that challenge me to think critically and push boundaries, always striving to deliver work that is both <span style={{ color: "#00BFFF", fontWeight: "bold" }}>innovative</span> and <span style={{ color: "#00BFFF", fontWeight: "bold" }}>impactful</span>. Collaboration and adaptability are at the core of my work ethic, as I believe in the power of <span style={{ color: "#00BFFF", fontWeight: "bold" }}>teamwork</span> to achieve extraordinary results.
        </p>
      </div>
    </section>
  );
}