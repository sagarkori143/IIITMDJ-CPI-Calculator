import React, { useEffect } from 'react';

const StatCounter = () => {
  useEffect(() => {
    const scInvisible = 0;
    

    return () => {
      // Cleanup script when the component is unmounted
      
    };
  }, []);

  return (
        <div className="statcounter">
          <a>
            <img
              className="statcounter"
              src={`https://c.statcounter.com/12952087/0/ea6f9214/0/`}
              alt="Visitors-counter"
            />
          </a>
        </div>
  );
};

export default StatCounter;
