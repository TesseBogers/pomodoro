import React from "react";
import glassSound from "../assets/glass.mp3"


function Counter({minute, second}) {

    return(
    <div className="timer" id ="timer"> <div id="countdown-number">{minute}:{second}</div>
    </div>
);
}
export default Counter;
