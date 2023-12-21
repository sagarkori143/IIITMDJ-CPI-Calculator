import React, { useState, useEffect } from 'react';
import '../styles/home.scss'; // Import your stylesheet

const CPI = () => {
  const [selectedSemester, setSelectedSemester] = useState(4);
  const [selectedBranch, setSelectedBranch] = useState('cse');
  const [spis, setSpis] = useState(Array(8).fill(''));
  const [tweenedNumber, setTweenedNumber] = useState(0);

  const credits = require('../../static/credits.json');

  const textfield = (i) => `SPI of Semester ${i}`;

  const getSemCredit = (sem) => {
    let branch = 0;
    if (selectedBranch === 'ece') {
      branch = 1;
    } else if (selectedBranch === 'me') {
      branch = 2;
    }
    return parseInt(credits[`sem${sem}`][branch]);
  };

  const calc = (num) => {
    let numstr = num.toString();
    numstr = numstr.slice(0, numstr.indexOf('.') + 4);
    return Number(numstr);
  };

  useEffect(() => {
    setSpis(Array(8).fill(''));
  }, [selectedSemester]);

  const captions = () => {
    const totalCPI = calc(obtainedCPI());
    if (totalCPI <= 10 && totalCPI > 8.5) {
      return 'Can expect to go to JAPAN 🇯🇵 🤓';
    } else if (totalCPI <= 8.5 && totalCPI > 7.8) {
      return ' Macchaa! Rocked it 😎';
    } else if (totalCPI <= 7.8 && totalCPI > 7) {
      return ' Cool, great score 🥂 ';
    } else if (totalCPI <= 7 && totalCPI > 6) {
      return 'Needs to put extra effort 🔨';
    } else if (totalCPI <= 6) {
      return 'Padh lo thoda bro 😐';
    } else {
      return 'It Seems, you have entered the wrong value ❌';
    }
  };

  const tweenCPI = () => tweenedNumber.toFixed(1);

  const obtainedCPI = () => {
    let totalCredits = 0;
    let obtainedCredits = 0;
    spis.forEach((value, index) => {
      totalCredits += getSemCredit(index + 1);
      obtainedCredits += getSemCredit(index + 1) * parseFloat(value);
    });
    const cpi = obtainedCredits / totalCredits;

    return calc(cpi);
  };

  useEffect(() => {
    window.TweenLite.to({ tweenedNumber }, 0.8, { setTweenedNumber: obtainedCPI() });
  }, [obtainedCPI]);

  return (
    <div>
      <div className="nav">
        <div className="branch">
          <label>Branch 📚</label>
          <button onClick={() => setSelectedBranch('cse')} className={selectedBranch === 'cse' ? 'active' : ''}> CSE 💻 </button>
          <button onClick={() => setSelectedBranch('ece')} className={selectedBranch === 'ece' ? 'active' : ''}> ECE 💡 </button>
          <button onClick={() => setSelectedBranch('me')} className={selectedBranch === 'me' ? 'active' : ''}> ME 🤖 </button>
        </div>
        <div className="semester">
          <label>Semesters Done 🎉</label>
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(Number(e.target.value))} className="smaller">
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Completed 🔥</option>
            ))}
          </select>
        </div>
      </div>
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
            />
          </div>
        ))}
      </div>
      <hr style={{ display: obtainedCPI() ? 'block' : 'none' }} />
      <div className="result" style={{ display: obtainedCPI() ? 'block' : 'none' }}>
        <h3>{tweenCPI()}<span className="outof">/10</span></h3>
        <h4>{captions()}</h4>
      </div>
    </div>
  );
};

export default CPI;
