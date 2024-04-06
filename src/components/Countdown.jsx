import React, { useState, useEffect } from "react";

const Countdown = ({ date }) => {
  const getTimeLeft = (countdownDate) => {
    const totalTimeLeft = countdownDate - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <div className="flex space-x-1">
      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];
        return (
          <div className="flex" key={label}>
            <div className="value">
              <span>{value}</span>
            </div>
            <span className="label">{label[0]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
