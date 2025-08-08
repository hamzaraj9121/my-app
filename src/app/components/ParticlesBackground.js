'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Load the tsparticles engine
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
          color: "#121212", // Solid dark background
        },
        particles: {
          number: {
            value: 50, // Number of particles
          },
          size: {
            value: 3, // Size of particles
          },
          move: {
            enable: true,
            speed: 2, // Speed of particle movement
          },
          links: {
            enable: true, // Enable links between particles
            distance: 150, // Distance for linking
            color: "#ffffff", // Link color
            opacity: 0.4,
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