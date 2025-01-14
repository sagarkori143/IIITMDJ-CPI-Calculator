import SPI from "../Components/SPI";
import CPI from "../Components/CPI";
import React, { useState } from "react";
import "./Calculator.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import StatCounter from "../Components/StatsCounter";
import { ToastContainer } from "react-toastify";



export const Calculator = () => {
  const [target, setTarget] = useState(0);
  const navigate=useNavigate();
  return (
    <div className="h-fit w-full m-0 overflow-x-hidden bg-[rgb(14,13,13)] text-aliceblue flex flex-col gap-[10px] justify-center items-center text-white">
      <ToastContainer/>
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
          <h2 className="font-bold text-[#a63232]">SPI</h2>
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
        <h2 className="font-bold text-[#45a42ee7]">CPI</h2>

        </div>
        <div className="Socials">
          <a href="https://github.com/sagarkori143/IIITMDJ-CPI-Calculator" target="_blank">
          <div className="gitlink">
          <button class="gitBtn">
          <svg class="gitsvgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          <span class="gittext">Github</span>
          </button>
          </div>
          </a>
        </div>
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
      <div className="Footer">
      <div className="Contact">
          <h2>Contact : </h2>

        <a href="https://in.linkedin.com/in/sagar-kori-02280a258" target="_blank">
        <div class="linkedinlink">
        <button class="linkedinBtn">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
        <path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" style={{ fill: '#2867b2' }} />
        <rect height="257.962" width="85.76" x="61.053" y="178.667" style={{ fill: '#fff' }} />
        <path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
        <path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
        </svg>
        <span class="linkedintext">LinkedIn</span>
        </button>
        </div>
        </a>

        <a href="mailto:sagarkoriup11@gmail.com" target="_blank">
        <div class="emaillink">
        <button class="emailBtn">
        <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} width="512px" xmlSpace="preserve">
        <rect height="358.87" style={{ fill: '#F1F5F7' }} width="357.904" x="77.045" y="76.565" />
        <path d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z M256.002,293.738" style={{ fill: '#DCE6EA' }} />
        <path d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565L449.861,76.565z M449.861,76.565" style={{ fill: '#F84437' }} />
        </svg>
        <span class="emailtext">Email</span>
        </button>
        </div>
        </a>
     
        <a href="https://www.instagram.com/sagarkori143/" target="_blank">
        <div className="instalink">
        <button class="instaBtn">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="instasvgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        <span class="instatext">Instagram</span>
        </button>
        </div>
        </a>
        

        
    

        </div>

        <div className="Counter">
        <a>Visit Counter: </a>
        <StatCounter/>
        </div>


      </div>
    </div>
  );
};
