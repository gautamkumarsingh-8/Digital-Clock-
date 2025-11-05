import React, { useState } from 'react'
import "./Clock.css";
const Clock = () => {
    const curentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(curentTime);

    const update = () => {
        const curentTime = new Date().toLocaleTimeString();
        setTime(curentTime);
    }
    setInterval(() => {
        update()
    }, 1000)
    return (
        <div className='clock-container'>
            <h1>Digital Clock</h1>
            <h2 className='time-display'>{time}</h2>
        </div>
    )
}

export default Clock
