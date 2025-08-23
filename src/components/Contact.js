"use client";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaGraduationCap } from "react-icons/fa";
import ParticlesBackground from "@/components/ParticlesBackground";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineMail } from "react-icons/md";
import "@/components/contact.css"
import { FaLocationDot } from "react-icons/fa6";

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
      className="contact-section"
      style={{
        background: "#020b16",
        color: "#f0f0f0",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative",
      }}
    >

  <div
    style={{
      position: "absolute",
      top: "-100px",
      left: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(7, 64, 155, 0.92)", // Tailwind blue-500
      filter: "blur(200px)",
      borderRadius: "70%",
      zIndex: 1
    }}
  ></div>

  {/* Purple blur - bottom right */}
  <div
    style={{
      position: "absolute",
      bottom: "-100px",
      right: "-100px",
      width: "400px",
      height: "400px",
      background: "rgba(147,51,234,0.4)", // Tailwind purple-600
      filter: "blur(200px)",
      borderRadius: "50%",
      zIndex: 1,
    }}
  ></div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container">

      <div className="  row justify-content-center align-items-center">
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
              <FaLocationDot />
              <strong className="mx-2">Location</strong>
              <span className="text-body-secondary">Faisalabad,Punjab,Pakistan</span>
            </div>
            <div className="card bg-dark d-flex flex-row align-items-center mb-3 p-3">
              <FaPhoneAlt />
              
              <strong className="mx-2">Phone</strong>

              <span className="text-body-secondary">+923270086607</span>
            </div>
            <div className="card bg-dark d-flex flex-row align-items-center mb-3 p-3">
              <FaGraduationCap />
              <strong className="mx-2">Email:</strong>
              <span className="text-body-secondary">waleednisar43@gmail.com</span>
            </div>
            <h2 className="  mt-4 mb-3">Follow Me</h2>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-github me-2"></i>
             <span>  <FaGithub /> </span><span className="ms-2">Github</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-linkedin me-2"></i>
              <span><FaLinkedin /></span><span className="ms-2">LinkedIn</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-2"></i>
             <span> <MdOutlineMail /></span> <span className="ms-2">Email</span>
            </div>
            <div className="status-card d-flex flex-column p-3 mb-3"  style={{ animation: "blink 1.5s infinite"}}>
              <div className="d-flex align-items-center mb-2">
                <span className="status-dot me-2"></span>
                <h6 className="mb-0 text-success fw-bold">Available for work</h6>
              </div>
              <p className="mb-0 text-light-emphasis" >
                I'm currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}