import React, { useState } from 'react';
import glassSound from '../assets/glass.mp3';
import soundOn from '../assets/sound_on.png';
import soundOff from '../assets/sound_off.png';


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
            className='sound-button'
            onClick={handleSound}
        >
            {sound === false ?
                <img className='sound-button' src={soundOff} alt="Sound off"/>
                :
                <img className='sound-button' src={soundOn} alt="Sound on"/>}
        </button>
    );
}
export default SoundChange;