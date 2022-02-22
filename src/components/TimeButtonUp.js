import React from 'react';
import plus from '../assets/plus_icon.png';

function TimeButtonUp({time, setTime}) {

    return(
        <button
            className='change-button'
            type="button"
            onClick={() => setTime(time + 1 )}
            disabled={time === 60}
        >
            <img className='change-button' src={plus} alt='plus-sign'/>
        </button>
    );
}
export default TimeButtonUp;