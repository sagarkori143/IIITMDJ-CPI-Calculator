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

  // Helper function to format a number to a fixed decimal
  const calc = (num) => {
    if (typeof num != Number) {
      return 0;
    }
    let numstr = num.toString();
    numstr = numstr.slice(0, numstr.indexOf(".") + 4);
    return Number(numstr);
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
    if (loading || !course) {
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
    let estimated = 0;
    if (loading) {
      console.log(loading, "So cant run semtotal");
      return;
    } else {
      try {
        let score = 0;
        let tCredits = 0;
        let totalCredits = 0;

        tCredits = computeCourseCredits();
        courseGrades.forEach((el, index) => {
          const grade = getScore(el);
          if (grade !== 0) {
            totalCredits += tCredits[index];
          }
          score += grade * courseCredits[index];
          estimated = score / totalCredits;
        });
      } catch (e) {
        console.log("");
      }
    }

    return estimated;
  };

  // Total SPI value formatted for display
  const totalSPI = semTotal() === 0 ? null : calc(semTotal());

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

  // Animate the display of total SPI
  useEffect(() => {
    setTweenedNumber(totalSPI);
  }, [totalSPI]);

  // JSX structure
  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          
          <div className="nav">
            <div className="branch">
              <label>Branch 📚</label>
              <button
                onClick={() => setSelectedBranch("cse")}
                className={selectedBranch === "cse" ? "active" : "branches"}
              >
                {" "}
                CSE{" "}
              </button>
              <button
                onClick={() => setSelectedBranch("ece")}
                className={selectedBranch === "ece" ? "active" : "branches"}
              >
                {" "}
                ECE{" "}
              </button>
              <button
                onClick={() => setSelectedBranch("me")}
                className={selectedBranch === "me" ? "active" : "branches"}
              >
                {" "}
                ME{" "}
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
                  <td className="name">{`${course.courseCode} ${course.courseName}`}</td>
                  <td>
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
                    />
                  </td>
                </tr>
              ))}
            </table>
          
          {/* Result section */}
          <hr style={{ display: totalSPI ? "block" : "none" }} />
          <div
            className="result"
            style={{ display: totalSPI ? "block" : "none" }}
          >
            <h3>
              {tweenedNumber}
              <span className="outof">/10</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SPI;
