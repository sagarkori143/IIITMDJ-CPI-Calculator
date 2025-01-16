import React, { useEffect } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Calculator");
  };

  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  useEffect(() => {
    // Run confetti on mount
    fireConfetti();
    fireConfetti();
    
  }, []); // Only run once when the component mounts

  return (
    <div className="text-white flex flex-col items-center justify-center h-[100vh] lg:gap-[2%]">
      <motion.div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="lg:text-[100px] text-[60px] font-bold"
        >
          Acad-Mate
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className=" font-bold mt-[-20px]"
        >
          v2.0
        </motion.h1>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="font-semibold lg:text-[19px] mt-2"
      >
        Developed with ❤️ by Sagar Kori
      </motion.h2>
      <div className="launchbutton">
        <button
          className="btn"
          onClick={handleClick}
          aria-label="Navigate to Calculator"
        >
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            className="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="text">Let's Go</span>
        </button>
      </div>
    </div>
  );
};
