"use client";
import { useForm } from "react-hook-form";
import ParticlesBackground from "@/components/ParticlesBackground";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // Add this for spinner icon

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
      {/* Contact form */}
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
          zIndex: 1,
          position: "relative",
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
        > {isSubmitting ? (
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
        {/* Spinner animation style */}
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
  );
}