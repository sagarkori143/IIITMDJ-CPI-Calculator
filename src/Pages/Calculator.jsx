import SPI from "../Components/SPI";
import CPI from "../Components/CPI";
import React, { useState } from "react";
import "./Calculator.css";
import { useNavigate } from "react-router-dom";
import StatCounter from "../Components/StatsCounter";
import { ToastContainer } from "react-toastify";
import gmail from "./../assets/gmail.png"
import linkedIn from "./../assets/linkedin.png"
import insta from "./../assets/instagram.png"


export const Calculator = () => {
  const [target, setTarget] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {

    setTimeout(() => {
      setTarget(!target)
    }, 300);
  }
  return (
    <div className="h-fit w-full m-0 overflow-x-hidden bg-[rgb(14,13,13)] text-aliceblue flex flex-col gap-[10px] justify-center items-center text-white">
      <ToastContainer />
      <div className="Topper">
        <div className="Backbutton">

          {/* Button for going back to the HomePage */}
          <button class="button" onClick={() => { navigate("/") }}>
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
                <input id="switch" type="checkbox" onClick={() => { handleClick() }} />
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
        {
          !target ?
            (
              <div className="flex items-center justify-center"><SPI /></div>
            )
            :
            (
              <div className="flex items-center justify-center"><CPI /></div>
            )
        }
      </div>
      <div className="w-[90%] h-[40px] flex justify-between">
        <div className="flex items-center gap-2 overflow-hidden w-[21%] lg:w-[5.5%] hover:w-[70%] hover:lg:w-[15%] p-2 rounded-[10px] cursor-pointer bg-blue-600 transition-all duration-300 ease-in-out">
          <span className="font-semibold">Contact</span>
          <div className="flex items-center gap-2">
            <a href="https://in.linkedin.com/in/sagar-kori-02280a258" target="_blank">
            <img className="w-[80%] hover:scale-110" src={linkedIn}></img>
            </a>

            <a href="mailto:sagarkoriup11@gmail.com" target="_blank">
            <img className="w-[80%] hover:scale-110" src={gmail}></img>
            </a>

            <a href="https://www.instagram.com/sagarkori143/" target="_blank">
            <img className="w-[80%] hover:scale-110" src={insta}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mb-5">
          <a className="mb-1 font-semibold">Visit Counter: </a>
          <StatCounter />
        </div>
    </div>
  );
};
