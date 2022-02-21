import React, { useState } from 'react';
import glassSound from '../assets/glass.mp3';


function SoundChange({zeroMinutes, zeroSeconds }) {

    const [sound, toggleSound] = useState(true)

    const audio = new Audio(glassSound)
    if (sound === true) {
        if (zeroMinutes === 0 && zeroSeconds === 0) {
            audio.play();
        }
    }

    function handleSound() {
        if (sound === true) {
            toggleSound(false);
        } else {
            toggleSound(true);
        }
    }

    return(

        <button
            className='submit-button'
            onClick={handleSound}
        >
            {sound === false ? "SOUND OFF" : "SOUND ON"}
        </button>
    );
}
export default SoundChange;