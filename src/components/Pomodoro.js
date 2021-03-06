import '../App.css';
import Timer from './Timer';
import TimeButtonUp from './TimeButtonUp';
import TimeButtonDown from './TimeButtonDown';
import React, { useState } from 'react';

function Pomodoro() {

    const [workTime, setWorkTime] = useState(25);
    const [relaxTime, setRelaxTime] = useState(5);
    const [startFunction, setStartFunction] = useState(true);

    function handleClick() {
        if (startFunction === false) {
            setStartFunction(true);
        } else {
            setStartFunction(false);
        }
    }

    return (
            <div className="app">

                <h1 className="title">Pomodoro</h1>
                {startFunction === true ?
                    <Timer workAmount={workTime} relaxAmount={relaxTime}/>
                    :
                    null
                }
                <button
                    className='setting-button'
                    type="button"
                    onClick={handleClick}>
                    {startFunction === false ?
                        <p>START</p>
                        :
                        <p>RESET</p>
                    }
                </button>

                <div>
                        <div>
                    {startFunction === false ?
                        <>
                            <div>
                                <div className="timer-amount">Edit worktime: {workTime} minutes</div>
                                <TimeButtonUp setTime={setWorkTime} time={workTime}/>
                                <TimeButtonDown setTime={setWorkTime} time={workTime}/>
                            </div>
                            <div>
                                <div className="timer-amount">Edit relaxtime: {relaxTime} minutes</div>
                                <TimeButtonUp setTime={setRelaxTime} time={relaxTime}/>
                                <TimeButtonDown setTime={setRelaxTime} time={relaxTime}/>
                            </div>
                        </> : null }
                        </div>
                </div>
            </div>
    );
}
export default Pomodoro;