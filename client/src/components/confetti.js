import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}

const Confetti1 = () => {
    const [height, width] = useWindowSize();
    return (
        <Confetti
        height={height}
        width={width}
        numberOfPieces={1000}
        gravity={0.1}
        />
    )
}

export default Confetti1
