import React, { useState, useEffect } from "react";

/**
 * Component for displaying a countdown timer.
 * @param {Date} date - The target date and time for the countdown.
 */
const Countdown = ({ date }) => {
  // Function to calculate time left until the target date
  const getTimeLeft = (countdownDate) => {
    const totalTimeLeft = countdownDate - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  
  // State for time left
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date));

  // Update time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    // Clean up interval
    return () => {
      clearInterval(timer);
    };
  }, [date]);

  // Render countdown timer
  return (
    <div className="flex space-x-1">
      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];
        return (
          <div className="flex" key={label}>
            {/* Display value */}
            <div className="value">
              <span>{value}</span>
            </div>
            {/* Display label */}
            <span className="label">{label[0]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
