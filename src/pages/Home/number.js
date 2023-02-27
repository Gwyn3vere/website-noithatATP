import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

function NumberCounter(props) {
    const [targetNumber, setTargetNumber] = useState(props.number);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [shouldCount, setShouldCount] = useState(false);

    useEffect(() => {
        setTargetNumber(props.number);
    }, [props.number]);

    useEffect(() => {
        if (shouldCount) {
            const intervalId = setInterval(() => {
                if (currentNumber < targetNumber) {
                    setCurrentNumber(currentNumber + 1);
                } else {
                    clearInterval(intervalId);
                }
            }, 10); // lặp lại mỗi 10ms

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [currentNumber, targetNumber, shouldCount]);

    const handleWaypointEnter = () => {
        setShouldCount(true);
    };

    return (
        <div>
            <Waypoint onEnter={handleWaypointEnter} />
            <div>{currentNumber}</div>
        </div>
    );
}

export default NumberCounter;
