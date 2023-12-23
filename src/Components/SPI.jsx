import React, { useState, useEffect } from "react";

import gsap from "gsap";
import eceDATA from "../ECE.json";
import cseDATA from "../CSE.json";
import meDATA from "../ME.json";
import smData from "../SM.json";
import "./SPI.css";

const SPI = () => {
  // State variables
  const [selectedBranch, setSelectedBranch] = useState("ece");
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [courseCredits, setCourseCredits] = useState([]);
  const [courseGrades, setCourseGrades] = useState([]);
  const [tweenedNumber, setTweenedNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  console.log(eceDATA);

  // Helper function to get score based on grade
  const getScore = (grade) => {
    if (grade == null) {
      return 0; 
    }
    switch (grade.toUpperCase()) {
      case "O":
        return 10;
      case "A+":
        return 10;
      case "A":
        return 9;
      case "B+":
        return 8;
      case "B":
        return 7;
      case "C+":
        return 6;
      case "C":
        return 5;
      case "D+":
        return 4;
      case "D":
        return 3;
      case "F":
        return 2;
      case "SS":
        return 0;
      default:
        return 0;
    }
  };

  // Reset courseGrades and courseCredits when selectedSemester or selectedBranch changes
  useEffect(() => {
    setCourseGrades([]);
    setCourseCredits([]);
  }, [selectedSemester, selectedBranch]);

  // Select the course data based on the selectedBranch

  const selectedBranchData = loading
    ? [] // If still loading, set an empty array
    : selectedBranch === "cse"
    ? cseDATA
    : selectedBranch === "ece"
    ? eceDATA
    : meDATA;

  // Use selectedBranchData instead of directly using ECE
  const course = selectedBranchData;

  // Helper function to compute course credits for the selected semester
  const computeCourseCredits = () => {
    if ( !course) {
      console.log("Problem in computeCourseCredits.", loading);
      return [];
    }
    const credits = [];
    course[selectedSemester].forEach((el) => {
      credits.push(el.courseCredits);
    });
    return credits;
  };

  // Helper function to calculate the total SPI
  const semTotal = () => {
    console.log("Calculating semTotal..")
        let score = 0;
        let tCredits = 0;
        let totalCredits = 0;
        let estimated=0;

        tCredits = computeCourseCredits();
        courseGrades.forEach((el, index) => {
          const grade = getScore(el);
          if (grade !== 0) {
            totalCredits += tCredits[index];
          }
          score += grade * tCredits[index];

        });
        estimated = score / totalCredits;
        console.log("semTotal Calculated",estimated);
        if(isNaN(estimated)){return 0};
        return parseFloat(estimated.toFixed(2));
  };

  // Total SPI value formatted for display
  const totalSPI = semTotal() === 0 ? null :semTotal();

  // Helper function to determine captions based on SPI
  const Comments = () => {
    if (totalSPI <= 10 && totalSPI > 8.5) {
      return "Waah beta! Moj kardi";
    } else if (totalSPI <= 8.5 && totalSPI > 7.8) {
      return " Ye hui na baat!";
    } else if (totalSPI <= 7.8 && totalSPI > 7) {
      return " Doing great! Keep going buddy 🏃‍♂️  ";
    } else if (totalSPI <= 7 && totalSPI > 6) {
      return "Aise to kaam nahi chalega dost 😐";
    } else if (totalSPI <= 6) {
      return "Padh lo thoda bro 😐";
    } else {
      return "Hey prabhu. Hey Hariram Krishna Jagannatham. Ye kya hua 🫠 ";
    }
  };


  // JSX structure
  return (
    <div className="Containery">
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          
          <div className="nav">
            <div className="branchbuttons">
              <label>Branch 📚</label>
              
             
          <button onClick={() => setSelectedBranch('ece')} className={selectedBranch === 'ece' ? 'active' : 'btnn'} type="button">
          <strong>ECE</strong>
          <div id="container-stars">
          <div id="stars"></div>
          </div>

          <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
          </div>
          </button>

          <button onClick={() => setSelectedBranch('cse')} className={selectedBranch === 'cse' ? 'active' : 'btnn'} type="button">
          <strong>CSE</strong>
          <div id="container-stars">
          <div id="stars"></div>
          </div>

          <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
          </div>
          </button>

          <button onClick={() => setSelectedBranch('me')} className={selectedBranch === 'me' ? 'active' : 'btnn'} type="button">
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
            <div className="semester">
              <label>Semester 🎉</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(Number(e.target.value))}
                className="SemDropDown"
              >
                {[...Array(8)].map((_, i) => (
                  <option className="SemOptions" key={i} value={i}>
                    Semester {i + 1}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Table for entering course grades */}
          
            <table className="course-list">
              {course[selectedSemester].map((course, index) => (
                <tr key={course.id} className="course">
                  <td className="name">{`• ${course.courseCode} ${course.courseName}`}</td>
                  <td className="inputs">

                  <div class="containerInput">
                  <input 
                  placeholder="Grades obtained" 
                  type="text"
                  value={courseGrades[index] || ''}
                  onChange={(e) => {
                    const updatedGrades = [...courseGrades];
                    updatedGrades[index] = e.target.value;
                    setCourseGrades(updatedGrades);
                  }}
                  
                  />
                  </div>

                  </td>
                </tr>
              ))}
            </table>
          
          {/* Result section */}
          <div className="spiResult">
            <h1>Result</h1>
            <h2>{totalSPI}</h2>

          </div>
        </div>
      )}
    </div>
  );
};

export default SPI;


{/*

<input
type="text"
placeholder="Course Grade"
value={courseGrades[index]}
onChange={(e) =>
  setCourseGrades([
    ...courseGrades.slice(0, index),
    e.target.value,
    ...courseGrades.slice(index + 1),
  ])
}
/>*/}
