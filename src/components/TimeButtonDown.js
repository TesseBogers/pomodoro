import React from 'react';
import minus from '../assets/minus_icon.png';

function TimeButtonDown({time, setTime}) {
    return (
        <button className="change-button"
                type="button"
                onClick={() => setTime(time - 1 )}
                disabled={time === 1}
        >
            <img className='change-button' src={minus} alt='minus-sign'/>
        </button>
    );
}
export default TimeButtonDown;