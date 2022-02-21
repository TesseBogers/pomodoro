import React, { useState } from 'react';
import glassSound from '../assets/glass.mp3';


function SoundChange({zeroMinutes, zeroSeconds }) {

    const [sound, toggleSound] = useState(false)

    const audio = new Audio(glassSound)
    if (sound === true) {
        if (zeroMinutes === 0 && zeroSeconds === 0) {
            audio.play();
        }
    }

    function handleSound() {
        if (sound === false) {
            toggleSound(true);
        } else {
            toggleSound(false);
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