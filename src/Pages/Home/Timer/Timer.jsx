import React, { useState, useEffect } from "react";

const Timer = ({ minutes = 0, seconds = 0 }) => {
  const [changedTime, setChangedTime] = useState({
    minutes: "",
    seconds: "",
    alarmDuration: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setChangedTime({
      ...changedTime,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(changedTime)
  }






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
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
        <div>
          <span className="countdown font-mono text-9xl tracking-widest font-bold">
            <span style={{ "--value": remainingTime.minutes }}></span>:
            <span style={{ "--value": remainingTime.seconds }}></span>
          </span>
          <div
            className="flex justify-evenly px-16 mt-6">
            <button
              className="btn btn-neutral p-2 btn-circle"
              onClick={restart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
            <button
              className={
                isRunning
                  ? "btn btn-neutral p-2 btn-circle"
                  : "btn btn-primary p-2 btn-circle text-neutral"
              }
              onClick={pauseAndResume}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isRunning
                      ? "M15.75 5.25v13.5m-7.5-13.5v13.5"
                      : "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  }
                />
              </svg>
            </button>
            <button className="btn btn-neutral p-2 btn-circle" onClick={() => window.my_modal_3.showModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          <dialog id="my_modal_3" className="modal bg-black bg-opacity-60 ">
            <form method="dialog" className="modal-box p-10">
              <button className="absolute right-2 top-2 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-error">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


              </button>
              <h3 className="font-semibold text-lg">Settings</h3>
              <p className="py-4">
                <form className="grid gap-8" onSubmit={handleSubmit}>
                  <div>
                    <label className="block">Time:</label>
                    <div className="join mt-3">
                      <input
                        type="number"
                        className="input input-primary join-item"
                        placeholder="minutes"
                        value={changedTime.minutes}
                        onChange={handleInputChange}
                        name="minutes"
                      />
                      <input
                        type="number"
                        className="input input-primary join-item"
                        placeholder="seconds"
                        value={changedTime.seconds}
                        onChange={handleInputChange}
                        name="seconds"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block">Alarm Duration:</label>
                    <input type="number" name="alarmDuration" className="input-primary input mt-3" value={changedTime.alarmDuration} onChange={handleInputChange} placeholder="in seconds"/>
                  </div>

                  <div className="mt-5">
                  <button className="btn btn-primary text-neutral mr-3">Save</button>
                  <button className="btn btn-neutral">reset</button>
                  </div>
                </form>
              </p>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Timer;
