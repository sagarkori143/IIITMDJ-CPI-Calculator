import SPI from "../Components/SPI";
import CPI from "../Components/CPI";
import React, { useState } from "react";
import "./Calculator.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';



export const Calculator = () => {
  const [target, setTarget] = useState(0);
  const navigate=useNavigate();
  return (
    <div id="particles-js">
    <div className="mainContainer">
      <div className="Topper">
        <div className="Backbutton">
   
         {/* Button for going back to the HomePage */}
          <button class="button" onClick={()=>{navigate("/")}}>
            <div class="button-box">
              <span class="button-elem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span class="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>


        </div>
        <div className="Navbarx">
          <h2 className="spi">SPI</h2>
         {/* Switch button */}
         <div>
         <label class="switch-button" for="switch">
        <div class="switch-outer">
        <input id="switch" type="checkbox" onClick={()=>{setTarget(!target)}}/>
        <div class="button">
        <span class="button-toggle"></span>
        <span class="button-indicator"></span>
        </div>
        </div>
        </label>

         </div>
        <h2 className="cpi">CPI</h2>

        </div>
        <div className="githublink"></div>
      </div>

      <div className="Content">
      <AnimatePresence exitBeforeEnter={false} mode="wait">
        {target ? (
          <motion.div
            key="spi"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <CPI />
          </motion.div>
        ) : (
          <motion.div
            key="cpi"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <SPI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
 </div> 
  );
};
