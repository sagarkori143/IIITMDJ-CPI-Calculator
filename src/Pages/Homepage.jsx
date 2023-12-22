import React from "react";
import "./Homepage.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



export const Home = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/Calculator");
    }
    return (
        <div className="Homepage">
            <div className="Navbar">
                
                    <motion.h2
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.3 }}
                    >Sagar Kori presents,</motion.h2>
               
            </div>
            <div className="Container">
            
            
            <motion.div className="Intro"
                  
            >
                <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >CPI Predictor</motion.h1>
                <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={(custom) => ({ opacity: 1, y: 0, transition: { delay: custom * 0.5,duration:1 } })}
                custom={1} // Pass a custom prop to control the delay for the second component
                >For IIITDMJ students</motion.h2>
            </motion.div>

            <div className="launchbutton" >
               

            <button class="btn" onClick={handleClick}>
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span class="text">Let's Go</span>
            </button>

            </div>



            </div>
        </div>
    );
};
