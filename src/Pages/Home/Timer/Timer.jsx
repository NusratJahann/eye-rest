import React, { useState, useEffect } from "react";

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [remainingTime, setRemainingTime] = useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
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
    }

    return () => clearInterval(timer);
  }, [remainingTime, isRunning]);

  const pauseAndResume = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };
  const restart = () => {
    setRemainingTime({
      minutes: minutes,
      seconds: seconds,
    });
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <span>{remainingTime.minutes}</span>:
        <span>{remainingTime.seconds}</span>
      </div>
      <button className="btn btn-neutral" onClick={pauseAndResume}>
        {isRunning ? "pause" : "resume"}
      </button>
      <button className="btn btn-neutral" onClick={restart}>
        restart
      </button>
    </div>
  );
};

export default Timer;
