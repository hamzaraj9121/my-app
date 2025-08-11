import ParticlesBackground from "./ParticlesBackground";
import "@/app/globals.css"; // Your global styles
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        overflow: "hidden", // Ensure particles stay within the section
        textAlign: "center", // Center-align text
        padding: "0 20px", // Add padding for responsiveness
      }}
    >
      <ParticlesBackground /> {/* Full-screen particles animation */}
      <div style={{ zIndex: 1 }}>
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">
           Hamza Rajpoot
        </p>

        <p className="lead">
           Web Developer | Flyer Designer | UI/UX Designer
        </p>
      </div>
    </section>
  );
}