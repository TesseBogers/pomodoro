import React, { useState, useEffect } from 'react'
import Counter from './Counter';
import SoundChange from './SoundChange';


function Timer({workAmount, relaxAmount}) {

    const [minutes, setMinutes] = useState(workAmount)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [clicked, toggleClicked] = useState(false)
    const [stopCounter, setStopCounter] = useState(false)


    useEffect(() => {
            const interval = setInterval(() => {
                if (!stopCounter) {
                    if (seconds === 0) {
                        if (minutes !== 0) {
                            setSeconds(59)
                            setMinutes(minutes - 1)
                        } else {
                            const minutes = displayMessage ? workAmount - 1 : relaxAmount - 1
                            const seconds = 59

                            setSeconds(seconds)
                            setMinutes(minutes)
                            setDisplayMessage(!displayMessage)
                        }
                    } else {
                        setSeconds(seconds - 1)
                    }
                }
            }, 1000)
            return () => {
                clearInterval(interval)
            };
        }
    );

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds


    function handleClick() {
        if (clicked === false) {
            toggleClicked(true);
        } else {
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
                className='submit-button'
                type="button"
                onClick={handleClick}
            >
                {clicked === false ? "Break" : "Start"}
            </button>

            <SoundChange zeroMinutes={minutes} zeroSeconds={seconds}/>

        </div>
    );
}
export default Timer;

