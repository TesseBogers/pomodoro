import React from "react";


function TimeButtonUp({time, setTime}) {

    return(

        <button
            className='change-button'
            type="button"
            onClick={() => setTime(time + 1 )}
            disabled={time === 60}
        >
            <div>+</div>
        </button>
    )

}
export default TimeButtonUp;