'use client';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "", 
        color: "#f0f0f0", 
        width: "100%", 
        height: "70vh", 
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center", 
        textAlign: "center", // Center-align text
        padding: "0 20px", 
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "600", 
            
            letterSpacing: "1.5px", 
            marginBottom: "20px", 
            position: "relative",
          }} className="display-4"
        >
          About Me
          <span
            style={{
              display: "block",
              width: "60px",
              height: "3px",
              background: "#00BFFF", 
              margin: "10px auto 0",
            }}
          ></span>
        </h2>
        <p
          style={{
            fontSize: "1.2rem", 
            lineHeight: "1.8", 
            fontFamily: "'Roboto', sans-serif", 
            color: "#e0e0e0", 
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