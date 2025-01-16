import React, { useState, useEffect } from "react";
import ECE22 from "./../DataFiles/Courses/ECE.json"
import CSE22 from "./../DataFiles/Courses/CSE.json";
import ME22 from "./../DataFiles/Courses/ME.json";
import ECE23 from "./../DataFiles/Courses/ECE23.json";
import CSE23 from "./../DataFiles/Courses/CSE23.json";
import ME23 from "./../DataFiles/Courses/ME23.json";
import green from "./../assets/green.png"
import red from "./../assets/red.png"

const SPI = () => {
  // State variables
  const [selectedBranch, setSelectedBranch] = useState("ece");
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [courseGrades, setCourseGrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(2022);
  const [courseCredits, setCourseCredits] = useState([]);

  // Data selection based on choices
  const getScore = (grade) => ({
    "O": 10, "A+": 10, "A": 9, "B+": 8, "B": 7, "C+": 6, "C": 5,
    "D+": 4, "D": 3, "F": 0, "SS": 0
  }[grade?.toUpperCase()] || 0);
  const branchMap = selectedBatch === 2023
    ? { cse: CSE23, ece: ECE23, me: ME23 }
    : { cse: CSE22, ece: ECE22, me: ME22 };
  const selectedBranchData = branchMap[selectedBranch] || null;
  const course = selectedBranchData;

  // Main SPI calculation function
  const calculateSPI = () => {
    let totalCredits = 0;
    let earnedCredits = 0;
    courseGrades.forEach((el, index) => {
      const grade = getScore(el);
      if (grade !== 0 && courseCredits[index] > 0) {
        totalCredits += courseCredits[index];
        earnedCredits += grade * courseCredits[index];
      }
    });
    let result = earnedCredits / totalCredits
    return parseFloat(result.toFixed(2));
  }
  const totalSPI = calculateSPI() === 0 ? null : calculateSPI();

  const courseSkip = (index) => {
    setCourseCredits((prevCredits) =>
      prevCredits.map((credit, i) => (i === index ? -credit : credit))
    );
  };

  useEffect(() => {
    setCourseGrades([]);
    let semData = selectedBranchData[selectedSemester];
    let creditsList = []
    semData.forEach((el, ind) => {
      creditsList.push(el.courseCredits)
    })
    setCourseCredits(creditsList)
  }, [selectedSemester, selectedBranch]);


  return (
    <div className="lg:text-[16px] md:text-[15px] text-[14px] border-4 border-[rgb(184,199,216)] rounded-[15px] lg:w-[100%] w-[80%] p-[15px] m-[15px] flex flex-col justify-center items-center">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-[80%] flex flex-row gap-2">
            <label>Branch 💫</label>
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
          <div className="SemesterAndBatches">
            <div className="flex justify-center items-center m-[5px]">
              <label>Semester ✍️</label>
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

            <div className="Batch">
              <label>Batch 🎓</label>
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
        {/* Table for entering course grades */}

        <table className="flex flex-col p-[10px] w-[100%] lg:w-[400px]">
          {course[selectedSemester].map((course, index) => (
            <tr key={course.id} className="border-[2.3px] border-solid border-[rgb(87,89,138)] rounded-[10px] mb-[5px] p-[4px] pr-[7px]">
              <td className="flex gap-1 font-semibold">
                {
                  courseCredits[index] > 0 ?
                    (
                      <button><img onClick={() => courseSkip(index)} className="h-3 hover:scale-110" src={green}></img></button>
                    )
                    :
                    (
                      <button><img onClick={() => courseSkip(index)} className="h-3 hover:scale-110" src={red}></img></button>
                    )
                }
                {`${course.courseCode} ${course.courseName} (${course.courseCredits}) `}
              </td>
              <td className="flex">

                <div >
                  <input
                    placeholder="Enter grades obtained"
                    type="text"
                    value={courseGrades[index] || ''}
                    onChange={(e) => {
                      const updatedGrades = [...courseGrades];
                      updatedGrades[index] = e.target.value;
                      setCourseGrades(updatedGrades);
                    }}
                    className="bg-transparent h-[30px] border-none ml-1 rounded-md text-blue-500 font-semibold"

                  />
                </div>

              </td>
            </tr>
          ))}
        </table>

        {
          totalSPI > 0 ?
            <div className="flex items-center justify-center gap-[15px]">
              <h1 className="text-[20px]">Result : </h1>
              <h1 className="text-[20px] font-semibold">{totalSPI}</h1>
            </div>
            :
            ""
        }
      </div>
    </div>
  );
};

export default SPI;
