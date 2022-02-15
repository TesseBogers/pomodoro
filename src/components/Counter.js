import React from "react";

function Counter({minute, second}) {
    return(
    <div className="timer" id ="timer"> <div id="countdown-number">{minute}:{second}</div> </div>
    );
}
export default Counter;
