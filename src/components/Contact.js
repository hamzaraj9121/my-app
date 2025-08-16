"use client";
import { useForm } from "react-hook-form";
import { FaGraduationCap } from "react-icons/fa";
import ParticlesBackground from "@/components/ParticlesBackground";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await axios.post("/api/contact", formData);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Error sending message.");
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <ToastContainer position="top-center" />
      {/* Particle background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticlesBackground />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center align-items-center">
          {/* Left: Contact Form */}
          <div className="col-md-6 mb-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                background: "#212020ff",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                width: "100%",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Contact Me
              </h2>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                style={{
                  padding: "0.75rem",
                  borderRadius: "6px",
                  border: "1px solid #444",
                  background: "#333",
                  color: "#fff",
                }}
              />
              {errors.name && (
                <span style={{ color: "#ff4d4f", fontSize: "0.8rem" }}>
                  {errors.name.message}
                </span>
              )}
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your Email"
                style={{
                  padding: "0.75rem",
                  borderRadius: "6px",
                  border: "1px solid #444",
                  background: "#333",
                  color: "#fff",
                }}
              />
              {errors.email && (
                <span style={{ color: "#ff4d4f", fontSize: "0.8rem" }}>
                  {errors.email.message}
                </span>
              )}
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                rows={5}
                style={{
                  padding: "0.75rem",
                  borderRadius: "6px",
                  border: "1px solid #444",
                  background: "#333",
                  color: "#fff",
                  resize: "vertical",
                }}
              />
              {errors.message && (
                <span style={{ color: "#ff4d4f", fontSize: "0.8rem" }}>
                  {errors.message.message}
                </span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "0.75rem",
                  borderRadius: "6px",
                  border: "none",
                  background: "#007bff",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner
                      style={{
                        animation: "spin 1s linear infinite",
                        fontSize: "1.2rem",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
              <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                  }
                `}
              </style>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="col-md-6 mb-4">
           <div className=" text-white p-4">
      <h2 className="card-title mb-4">Contact Information</h2>
      </div>
      <div className="card-body">
     <div className="card bg-dark d-flex flex-row align-items-center mb-3 p-3">
  <i className="bi bi-envelope me-2 text-warning"></i>

  <strong className="mx-2">Email:</strong>
  <span className="text-body-secondary">waleednisar43@gmail.com</span>
</div>

      <div className="card bg-dark d-flex flex-row align-items-center mb-3 p-3">
  <i className="bi bi-envelope me-2 text-warning"></i>
  
  <strong className="mx-2">Email:</strong>
  <span className="text-body-secondary">waleednisar43@gmail.com</span>
</div>

<div className="card bg-dark d-flex flex-row align-items-center mb-3 p-3">
<FaGraduationCap />
  <strong className="mx-2">Email:</strong>
  <span className="text-body-secondary">waleednisar43@gmail.com</span>
</div>

        <h2 className="  mt-4 mb-3">Follow Me</h2>
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-github me-2"></i>
          <span>Github</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-linkedin me-2"></i>
          <span>LinkedIn</span>
        </div>
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-envelope me-2"></i>
          <span>Email</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-check-circle me-2 text-success"></i>
          <span>Available for work</span>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    
  );
}