import React, { useState, useEffect } from 'react';
import credits from "../Credits.json";
import "./CPI.css"


const CPI = () => {
  // State variables
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState('ece');
  const [spis, setSpis] = useState(Array(8).fill(''));
  const [result,setResult]=useState(0);


  // Helper function to get credits for a particular semester based on your branch
  const getSemCredit = (sem) => {
    let branch = 0;
    if (selectedBranch === 'ece') {
      branch = 1;
    } else if (selectedBranch === 'me') {
      branch = 2;
    } else if(selectedBranch === 'cse'){
      branch=3;
    } else if(selectedBranch === 'sm'){
      branch=4;
    }
    return parseInt(credits[`sem${sem}`][branch]);
  };

  // Helper function to format a number to a fixed decimal
  const calc = (num) => {
    let numstr = num.toString();
    numstr = numstr.slice(0, numstr.indexOf('.') + 3);
     setResult(Number(numstr));
     return;
  };

  // Reset spis when selectedSemester changes
  useEffect(() => {
    setSpis(Array(8).fill(''));
  }, [selectedSemester]);

  // Helper function to determine captions based on CPI
  const Comments = () => {
    if (result <= 10 && result > 8.5) {
      return 'Waah beta! Moj kardi';
    } else if (result <= 8.5 && result > 7.8) {
      return ' Ye hui na baat!';
    } else if (result <= 7.8 && result > 7) {
      return ' Doing great! Keep going buddy 🏃‍♂️  ';
    } else if (result <= 7 && result > 6) {
      return 'Aise to kaam nahi chalega dost 😐';
    } else if (result <= 6) {
      return 'Padh lo thoda bro 😐';
    } else {
      return 'Hey prabhu. Hey Hariram Krishn Jagannatham. Ye kya hua 🫠 ';
    }
  };

  // Helper function to format CPI for display


  // Helper function to calculate obtained CPI
  const obtainedCPI = () => {
    let totalCredits = 0;
    let obtainedCredits = 0;
    spis.forEach((value, index) => {
      totalCredits += getSemCredit(index + 1);
      obtainedCredits += getSemCredit(index + 1) * parseFloat(value);
    });
    const cpi = obtainedCredits / totalCredits;
    setResult(cpi);

    return calc(cpi);
  };

  
  // Helper function to generat text for each semester.
  const textfield = (i) => `SPI of Semester ${i}`;

  // JSX structure
  return (
    <div className='Containerx'>
      {/* Branch and Semester selection */}
      <div className="nav">
        <div className="branches">
          <label>Branch 📚</label>
          <button onClick={() => setSelectedBranch('cse')} className={selectedBranch === 'cse' ? 'active' : ''}> CSE 💻 </button>
          <button onClick={() => setSelectedBranch('ece')} className={selectedBranch === 'ece' ? 'active' : ''}> ECE 💡 </button>
          <button onClick={() => setSelectedBranch('me')} className={selectedBranch === 'me' ? 'active' : ''}> ME 🤖 </button>
        </div>
        <div className="semester">
          <label>How many Sems done? </label>
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(Number(e.target.value))} className="smaller">
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Completed </option>
            ))}
          </select>
        </div>
      </div>
      {/* Input for each semester */}
      <div className="course-list">
        {[...Array(selectedSemester)].map((_, i) => (
          <div key={i + 1} className="courseitem center">
            <p>{`Semester ${i + 1}`}</p>
            <input
              type="number"
              step="0.1"
              value={spis[i]}
              onChange={(e) => setSpis([...spis.slice(0, i), e.target.value, ...spis.slice(i + 1)])}
              placeholder={textfield(i + 1)}
              max="10"
              min="0"
              required
            />
          </div>
        ))}
      </div>
      <div><button className='calcButton' onClick={obtainedCPI}>Calculate</button></div>
      <div className='ResultSection'>
        <h1>{result}</h1>
      </div>
      
      
    </div>
  );
};

export default CPI;
