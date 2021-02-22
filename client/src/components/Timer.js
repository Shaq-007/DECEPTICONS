import React from 'react';
import { useState, useEffect } from 'react';
import "../components/Timer.css";
import stopwatch from "../assets/stopwatch.svg";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isActive, seconds]);

    return (
        
        <div className="app-2">
            <div className="time">
                <img
                    src={stopwatch}
                    style={{
                        width: "50px",
                        hight: "50px",
                    }}
                    alt="Timer icon"
                />
                {seconds}
            </div>

            <div className="row">
                <button className={`button-primary-${isActive ? 'active' : 'inactive'} `} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button-secondry" onClick={reset}>
                    Reset
                </button>
            </div>

        </div>

    );
};
 
export default Timer;
