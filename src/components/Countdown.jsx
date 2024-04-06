import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2024-04-14T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
