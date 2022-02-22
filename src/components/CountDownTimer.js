import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CountDownTimer({durationMinutes, clicked, minute, second }) {

    const time = () => {
        return (
            <div className="timer">
                {minute}:{second}
            </div>
        );
    }

        return (
            <div className="circles">
                    <CountdownCircleTimer
                        isPlaying={clicked === false}
                        duration={durationMinutes * 60}
                        colors={["#000000", "#A30000", "#A30000"]}
                        colorsTime={[10, 6, 0]}
                        onComplete={() => ({shouldRepeat: true, delay: 1})}
                        size={320}
                    >
                        {time}

                    </CountdownCircleTimer>
            </div>
        );
    }
export default CountDownTimer;
