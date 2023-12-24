import React, { useState, useEffect } from "react";
import credits from "../Credits.json";
import credits23 from "../Credits23.json";
import "./CPI.css";


const CPI = () => {
  // State variables
  const [selectedSemester, setSelectedSemester] = useState(4);
  const [selectedBranch, setSelectedBranch] = useState("ece");
  const [spis, setSpis] = useState(Array(8).fill(""));
  const [result, setResult] = useState(0);
  const [selectedBatch,setSelectedBatch]=useState(2022);

  // Helper function to get credits for a particular semester based on your branch
  const getSemCredit = (sem) => {
    let branch = 0;
    if (selectedBranch === "ece") {
      branch = 1;
    } else if (selectedBranch === "me") {
      branch = 2;
    } else if (selectedBranch === "cse") {
      branch = 3;
    } else if (selectedBranch === "sm") {
      branch = 4;
    }
    if(selectedBatch==2023){return parseInt(credits23[`sem${sem}`][branch])};
    return parseInt(credits[`sem${sem}`][branch]);
  };

  // Reset spis when selectedSemester changes
  useEffect(() => {
    setSpis(Array(8).fill(""));
    setResult(0);
  }, [selectedSemester, selectedBranch, selectedBatch]);

  // Helper function to determine captions based on CPI
  const Comments = () => {
    if (result <= 10 && result > 8.5) {
      return "Waah beta! Moj kardi";
    } else if (result <= 8.5 && result > 7.8) {
      return " Ye hui na baat!";
    } else if (result <= 7.8 && result > 7) {
      return " Doing great! Keep going buddy 🏃‍♂️  ";
    } else if (result <= 7 && result > 6) {
      return "Aise to kaam nahi chalega dost 😐";
    } else if (result <= 6) {
      return "Padh lo thoda bro 😐";
    } else {
      return "Hey prabhu. Hey Hariram Krishn Jagannatham. Ye kya hua 🫠 ";
    }
  };

  // Helper function to format CPI for display

  // Helper function to calculate obtained CPI
  const obtainedCPI = () => {
    let totalCredits = 0;
    let obtainedCredits = 0;
    console.log("spis entered:", spis);
    spis.forEach((value, index) => {
      const numericValue = parseFloat(value);
      // Check if the value is a number
      if (!isNaN(numericValue)) {
        totalCredits += getSemCredit(index + 1);
        console.log("total credits single", totalCredits);

        obtainedCredits += getSemCredit(index + 1) * numericValue;
      }
    });

    console.log("total credits", totalCredits);
    console.log("obtained credits", obtainedCredits);
    const cpi = obtainedCredits / totalCredits;
    setResult(parseFloat(cpi.toFixed(2)));

    return;
  };

  // Helper function to generat text for each semester.
  const textfield = (i) => `SPI of Semester ${i}`;

  // JSX structure
  return (
    <div className="Containerx">
      {/* Branch and Semester selection */}
      <div className="nav">
        <div className="branches">
          <label>Branch 💫</label>

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
        <div className="SemesterAndBatches">
          <div className="semester">
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
          <div key={i + 1} className="semlist-items">
            <p>{`• Semester ${i + 1}`}</p>

            <div class="containerInput">
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
              />
            </div>
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
        <p>{result > 10 ? "Looks like you entered some wrong values" : ""}</p>
      </div>
    </div>
  );
};

export default CPI;
