import React from 'react';

function TimeButtonDown({time, setTime}) {
    return (
        <button className="change-button"
                type="button"
                onClick={() => setTime(time - 1 )}
                disabled={time === 1}
        >
            <p>-</p>
        </button>
    );
}
export default TimeButtonDown;