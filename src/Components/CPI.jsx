import React, { useState, useEffect } from "react";
import credits from "../Credits.json";
import credits23 from "../Credits23.json";
import credits22 from "../Credits22.json";
import "./CPI.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CPI = () => {
  // State variables
  const [selectedSemester, setSelectedSemester] = useState(4);
  const [selectedBranch, setSelectedBranch] = useState("ece");
  const [spis, setSpis] = useState(Array(8).fill(""));
  const [result, setResult] = useState(0);
  const [selectedBatch, setSelectedBatch] = useState(2022);

  // Helper function to get credits for a particular semester based on your branch
  const getSemCredit = (sem) => {
    let branch = 0;
    if (selectedBranch === "ece") {
      branch = 0;
    } else if (selectedBranch === "me") {
      branch = 1;
    } else if (selectedBranch === "cse") {
      branch = 2;
    } else if (selectedBranch === "sm") {
      branch = 3;
    }
    if (selectedBatch == 2023) { return parseInt(credits23[`sem${sem}`][branch]) };
    if (selectedBatch == 2022) { return parseInt(credits22[`sem${sem}`][branch]) };
    return parseInt(credits[`sem${sem}`][branch]);
  };


  useEffect(() => {
    setSpis(Array(8).fill(""));
    setResult(0);
  }, [selectedBranch, selectedBatch]);

  /// For toast notifications
  const toastHandler = () => {
    if (result > 10) { return toast.warn("Hey prabhu. Hey Hariram Krishn Jagannatham Premanand. Ye kya hua 🫠") }
    if (result >= 9) { return toast.success("Nice to meet you Topper ✨") }
    if (result >= 8) { return toast.success("Bahut badhiya. Placement cutoff passed 😁") }
    if (result >= 7) { return toast.info("It's OK. But try to push more 💪") }
    if (result >= 6) { return toast.warn("Oo paaji kade padh vi liya kro .") }
    if (result > 0 && result < 6) { return toast.error("Bruhh 😢 Feeling sad for you.") }

  }
  useEffect(() => {

    if (result != 0) { toastHandler(); }
  }, [result]);


  // Helper function to calculate obtained CPI
  const obtainedCPI = () => {
    let totalCredits = 0;
    let obtainedCredits = 0;
    spis.forEach((value, index) => {
      const numericValue = parseFloat(value);
      // Check if the value is a number
      if (!isNaN(numericValue)) {
        totalCredits += getSemCredit(index + 1);

        obtainedCredits += getSemCredit(index + 1) * numericValue;
      }
    });

    const cpi = obtainedCredits / totalCredits;
    setResult(parseFloat(cpi.toFixed(2)));

    return;
  };


  // JSX structure
  return (
    <div className="lg:text-[16px] md:text-[15px] text-[14px]  overflow-hidden border-[4px] border-solid border-[rgb(84,110,140)] rounded-[15px] lg:w-[100%] w-[78%] flex flex-col gap-[20px] justify-center items-center p-4 m-[15px]">
      {/* Branch and Semester selection */}
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-2 w-[100%] items-center justify-center">
          <label>Branch</label>
          <button
            onClick={() => setSelectedBranch("ece")}
            className={selectedBranch === "ece" ? "active" : "btnn"}
            type="button"
          >
            <strong>ECE</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>

          <button
            onClick={() => setSelectedBranch("cse")}
            className={selectedBranch === "cse" ? "active" : "btnn"}
            type="button"
          >
            <strong>CSE</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>

          <button
            onClick={() => setSelectedBranch("me")}
            className={selectedBranch === "me" ? "active" : "btnn"}
            type="button"
          >
            <strong>ME</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
        <div className="flex">
          <div className="flex justify-center items-center">
            <label>Semester </label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(Number(e.target.value))}
              className="SemDropDown"
            >
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1} className="SemOptions">
                  {i + 1} Completed{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="Batch">
            <label>Batch ✌️</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(Number(e.target.value))}
              className="BatchDropDown"
            >
              <option className="BatchOptions">
                2020
              </option>
              <option className="BatchOptions">
                2021
              </option>
              <option className="BatchOptions">
                2022
              </option>
              <option className="BatchOptions">
                2023
              </option>

            </select>
          </div>
        </div>
      </div>
      {/* Input for each semester */}
      <div className="semlist">
        {[...Array(selectedSemester)].map((_, i) => (
          <div key={i + 1} className=" w-[100%] flex justify-between border-[2.3px] border-solid border-[rgb(87,89,138)] rounded-[15px] p-2">
            <p>{`🌟 Semester ${i + 1}`}</p>


            <input
              placeholder="SPI Obtained"
              type="text"
              value={spis[i]}
              onChange={(e) =>
                setSpis([
                  ...spis.slice(0, i),
                  e.target.value,
                  ...spis.slice(i + 1),
                ])
              }
              max="10"
              min="0"
              required
              className="bg-transparent w-[42%] border-none rounded-md"
            />

          </div>
        ))}
      </div>
      <div>
        <button class="Calculatorr" data-text="Awesome" onClick={obtainedCPI}>
          <span class="actual-text">&nbsp;Calculate&nbsp;</span>
          <span aria-hidden="true" class="hover-text">
            &nbsp;Calculate&nbsp;
          </span>
        </button>
      </div>
      <div className="ResultSection">
        <h1>{result > 0 ? result : ""}</h1>
      </div>
    </div>
  );
};

export default CPI;
