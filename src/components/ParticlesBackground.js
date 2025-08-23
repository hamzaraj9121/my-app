'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load the tsparticles engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true, // Enable full-screen particles
        },
        background: {
          color: "#0a192f", // Rich navy blue background
        },
        particles: {
          number: {
            value: 60, // Increased number of particles
          },
          color: {
            value: "#64ffda", // Teal accent color for particles
          },
          size: {
            value: 3, // Size of particles
          },
          move: {
            enable: true,
            speed: 1.5, // Slightly slower for more elegant movement
            direction: "none",
            random: true,
            straight: false,
            outMode: "bounce",
          },
          links: {
            enable: true, // Enable links between particles
            distance: 150, // Distance for linking
            color: "#8892b0", // Light blue-gray for links
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true, // Enable hover effect
              mode: "repulse", // Particles move away on hover
            },
            onClick: {
              enable: true, // Enable click effect
              mode: "push", // Add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distance for repulse effect
            },
            push: {
              quantity: 4, // Number of particles added on click
            },
          },
        },
      }}
    />
  );
}