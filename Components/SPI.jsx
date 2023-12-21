import React, { useState, useEffect } from 'react';
import '../styles/home.scss'; // Import your stylesheet

const SPI = () => {
  const [selectedBranch, setSelectedBranch] = useState('cse');
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [courseCredits, setCourseCredits] = useState([]);
  const [courseGrades, setCourseGrades] = useState([]);
  const [tweenedNumber, setTweenedNumber] = useState(0);

  const cse = require('../../static/cse.json');
  const ece = require('../../static/ece.json');
  const me = require('../../static/me.json');

  const getScore = (grade) => {
    switch (grade.toUpperCase()) {
      case 'O':
        return 10;
      case 'A+':
        return 10;
      case 'A':
        return 9;
      case 'B+':
        return 8;
      case 'B':
        return 7;
      case 'C+':
        return 6;
      case 'C':
        return 5;
      case 'D+':
        return 4;
      case 'D':
        return 3;
      case 'F':
        return 2;
      case 'SS':
        return 0;
      default:
        return 0;
    }
  };

  const calc = (num) => {
    let numstr = num.toString();
    numstr = numstr.slice(0, numstr.indexOf('.') + 4);
    return Number(numstr);
  };

  useEffect(() => {
    setCourseGrades([]);
    setCourseCredits([]);
  }, [selectedSemester, selectedBranch]);

  const course = { cse, ece, me }[selectedBranch];

  const computeCourseCredits = () => {
    const credits = [];
    course[selectedSemester].forEach((el) => {
      credits.push(el.courseCredits);
    });
    return credits;
  };

  const captions = () => {
    const totalSPI = calc(semTotal());
    if (totalSPI <= 10 && totalSPI > 8.5) {
      return 'Can expect to go to JAPAN 🇯🇵 🤓';
    } else if (totalSPI <= 8.5 && totalSPI > 7.8) {
      return ' Machaa, Rocked it 😎';
    } else if (totalSPI <= 7.8 && totalSPI > 7) {
      return ' Cool, great score 🥂 ';
    } else if (totalSPI <= 7 && totalSPI > 6) {
      return 'Needs to put extra effort 🔨';
    } else if (totalSPI <= 6) {
      return 'Padh lo thoda bro 😐';
    } else {
      return 'It Seems, you have entered the wrong value ❌';
    }
  };

  const semTotal = () => {
    let score = 0;
    let tCredits = 0;
    let totalCredits = 0;
    let estimated = 0;
    tCredits = computeCourseCredits();
    courseGrades.forEach((el, index) => {
      const grade = getScore(el);
      if (grade !== 0) {
        totalCredits += tCredits[index];
      }
      score += grade * courseCredits[index];
      estimated = score / totalCredits;
    });
    return estimated;
  };

  const totalSPI = semTotal() === 0 ? null : calc(semTotal());

  useEffect(() => {
    window.TweenLite.to({ tweenedNumber }, 1.8, { setTweenedNumber: totalSPI });
  }, [totalSPI]);

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
          <label>Semester 🎉</label>
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(Number(e.target.value))}>
            {[...Array(8)].map((_, i) => (
              <option key={i} value={i}>Semester {i + 1} 👉🏾 </option>
            ))}
          </select>
        </div>
      </div>
      <table className="course-list">
        {course[selectedSemester].map((course, index) => (
          <tr key={course.id} className="course">
            <td className="name">{`${course.courseCode} ${course.courseName}`}</td>
            <td>
              <input type="text" placeholder="Course Grade" value={courseGrades[index]} onChange={(e) => setCourseGrades([...courseGrades.slice(0, index), e.target.value, ...courseGrades.slice(index + 1)])} />
            </td>
          </tr>
        ))}
      </table>
      <hr style={{ display: totalSPI ? 'block' : 'none' }} />
      <div className="result" style={{ display: totalSPI ? 'block' : 'none' }}>
        <h3>{tweenedNumber.toFixed(1)}<span className="outof">/10</span></h3>
        <h4>{captions()}</h4>
      </div>
    </div>
  );
};

export default SPI;
