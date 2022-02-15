import React, { useState, useEffect } from "react"
import Counter from "./Counter";

function Timer({workTimeAmount, breakTimeAmount}) {

    const [minutes, setMinutes] = useState(workTimeAmount)
    const [seconds, setSeconds] = useState(0)
    const [pauze, setPauze] = useState(breakTimeAmount)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [clicked, toggleClicked] = useState(false)
    const [stopCounter, setStopCounter] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!stopCounter){
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                } else {
                    const minutes = displayMessage ? workTimeAmount - 1 : breakTimeAmount - 1
                    const seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setPauze(breakTimeAmount)
                    setDisplayMessage(!displayMessage)
                }
            } else {
                setSeconds(seconds - 1)
            }}
        }, 1000)
        return ()=> {
            clearInterval(interval)
                };
    });

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds


    function handleClick() {
        if (clicked === false) {
        toggleClicked(true); }
        else {
            toggleClicked(false);
        }
        setStopCounter(!stopCounter);
    }

    return (
        <div className="pomodoro">
            {displayMessage === true ?
                <div>Time for a break:</div>
                :
                <div>Time to focus:</div>
            }

            {displayMessage === true ?
                <Counter minute={timerMinutes} second={timerSeconds}/>
                :
                <Counter minute={timerMinutes} second={timerSeconds}/>
            }

            <button
                className='header-button'
                type="button"
                onClick={handleClick}
            >
                {clicked === false ?  "Pauze" : "Start"}
            </button>
        </div>
    );
}
export default Timer;

