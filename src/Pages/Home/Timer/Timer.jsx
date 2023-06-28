import React, { useState, useEffect } from "react";

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [remainingTime, setRemainingTime] = useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      if (remainingTime.minutes === 0 && remainingTime.seconds === 0) {
        clearInterval(timer);
      } else if (remainingTime.seconds === 0) {
        setRemainingTime({
          minutes: remainingTime.minutes - 1,
          seconds: 59,
        });
      } else {
        setRemainingTime({
          minutes: remainingTime.minutes,
          seconds: remainingTime.seconds - 1,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <span>{remainingTime.minutes}</span>:
        <span>{remainingTime.seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
