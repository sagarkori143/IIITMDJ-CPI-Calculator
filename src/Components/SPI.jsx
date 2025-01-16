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
  const [courseCredits,setCourseCredits]=useState([]);

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
        return 0;
      case "SS":
        return 0;
      default:
        return 0;
    }
  };



  const selectedBranchData = !(selectedBatch === 2023)
    ? (loading ? [] : (
      selectedBranch === "cse" ? CSE22 :
        selectedBranch === "ece" ? ECE22 :
          selectedBranch === "me" ? ME22 :
            // Handle the default case here or set it to something else
            null
    ))
    :
    (loading ? [] : (
      selectedBranch === "cse" ? CSE23 :
        selectedBranch === "ece" ? ECE23 :
          selectedBranch === "me" ? ME23 :
            // Handle the default case here or set it to something else
            null
    ));

  const course = selectedBranchData;

  const calculateSPI =()=>{
    let semData=selectedBranchData[selectedSemester];
    let creditsArray=[];
    semData.forEach((el,index)=>{
      creditsArray.push(el.courseCredits);
    })

    let totalCredits=0;
    let earnedCredits=0;
    courseGrades.forEach((el, index) => {
      const grade = getScore(el);
      if (grade !== 0) {
        totalCredits += creditsArray[index];
        earnedCredits += grade * creditsArray[index];
      }
    });
    let result=earnedCredits/totalCredits
    return parseFloat(result.toFixed(2));
  }
  const totalSPI = calculateSPI() === 0 ? null : calculateSPI();

  useEffect(() => {
    setCourseGrades([]);
  }, [selectedSemester, selectedBranch]);
  return (
    <div className="lg:text-[16px] md:text-[15px] text-[14px] border-4 border-[rgb(184,199,216)] rounded-[15px] lg:w-[100%] w-[80%] p-[15px] m-[15px] flex flex-col justify-center items-center">
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
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
                    course.courseCredits>0?
                    (
                      <button><img onClick={()=>{course.courseCredits=-course.courseCredits}} className="h-3 hover:scale-110" src={green}></img></button>
                    )
                    :
                    (
                      <button><img onClick={()=>{course.courseCredits=-course.courseCredits}} className="h-3 hover:scale-110" src={red}></img></button>
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
      )}
    </div>
  );
};

export default SPI;
