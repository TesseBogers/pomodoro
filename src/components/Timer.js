import React, { useState, useEffect } from 'react'
import SoundChange from './SoundChange';
import CountDownTimer from './CountDownTimer';


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
                            const minutes = displayMessage ? workAmount - 1 : relaxAmount -1
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

            <SoundChange zeroMinutes={minutes} zeroSeconds={seconds}/>

            {displayMessage === false ?
                <div>Time to focus:</div>
                :
                <div>Time for a break:</div>

            }

            {displayMessage === false ?
                <CountDownTimer durationMinutes={workAmount}
                                clicked={clicked}
                                minute={timerMinutes}
                                second={timerSeconds}
                />
                :
                <CountDownTimer durationMinutes={relaxAmount}
                                clicked={clicked}
                                minute={timerMinutes}
                                second={timerSeconds}
                />
            }

            <button
                className='submit-button'
                type="button"
                onClick={handleClick}
            >
                {clicked === false ? "Break" : "Start"}

            </button>

        </div>
    );
}
export default Timer;

