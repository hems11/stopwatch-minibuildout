import { useEffect, useState } from "react";

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    
    useEffect(() =>{
        let intervalID;
        if(isRunning){
            intervalID = setInterval(() =>{
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }
        return () => clearInterval(intervalID);
    },[isRunning]);

    const handleStartStop = (e) => {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    }

    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (seconds) =>{
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60 ;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;

    }
    return (
        <div style={{padding:"10px"}}>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(elapsedTime)}</p>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch;